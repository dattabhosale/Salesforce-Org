trigger leadsecondtrigger on Lead (before insert,after insert,before update,after update) {
    switch on Trigger.operationType{
        When BEFORE_INSERT {
            for(Lead l : Trigger.new){
                if(String.isBlank(l.LeadSource)){
                    l.LeadSource='Other';
                }
                if(String.isBlank(l.Industry)){
                    l.Industry.addError('Please Fill Industry field');
                }
            }
        }
        When AFTER_INSERT {
            for(Lead l : Trigger.new){
                Task t = new Task(Subject='Call lead customer',whoid=l.id);
                insert t;
            }
        }
        When BEFORE_UPDATE {
            for(Lead l : Trigger.new){
                    if((l.Status=='Closed - Converted' || l.Status=='Closed - Not Converted') && trigger.Oldmap.get(l.id).Status=='Open - Not Contacted'){
                    l.Status.addError('You Cannot Close Lead');
                }
            }
        }
    }
}