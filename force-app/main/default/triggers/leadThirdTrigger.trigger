trigger leadThirdTrigger on Lead (before insert,before update) {
    for(Lead l :Trigger.new){
        if(Trigger.isupdate){
            if((l.Status=='Closed - Converted' || l.Status=='Closed - Not Converted') && Trigger.oldMap.get(l.id).Status=='Open - Not Contacted'){
                l.addError('You cannot close lead');
                
            }
        }
    }
    

}