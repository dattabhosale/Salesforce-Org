trigger contactPrimaryContact on Contact (before insert,before update) {
    if(trigger.isbefore && trigger.isinsert){
        contactTrigger.updateContact(trigger.new);
    }
    if(trigger.isbefore && trigger.isupdate){
        contactTrigger.updateContact(trigger.new);
    }
    
}