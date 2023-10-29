trigger caseTrigger on Case (After insert,After update,After delete) {
    
    if(trigger.isafter && trigger.isinsert){
        accountRatingUpdate.checkStatusClosed(trigger.new,NULL);
    }else if(trigger.isafter && trigger.isupdate){
        accountRatingUpdate.checkStatusClosed(trigger.new,trigger.old);
    }else if(trigger.isafter && trigger.isdelete){
        accountRatingUpdate.checkStatusClosed(NULL,trigger.old);
    }
    
}