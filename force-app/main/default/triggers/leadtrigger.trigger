trigger leadtrigger on Lead (before insert,before update) {
    for(Lead l: trigger.new){
        if(String.isBlank(l.LeadSource))
        {
            l.LeadSource='Other';
        }
        if(String.isBlank(l.Industry) && Trigger.isInsert){
            l.addError('Please fill Industry field ');
        }
        if((l.Status=='Closed - Converted' || l.Status=='Closed - Not Converted') && trigger.Oldmap.get(l.id).Status=='Working - Contacted'){
            l.Status.addError('You Cannot Close Lead');
        }
        
    }
}