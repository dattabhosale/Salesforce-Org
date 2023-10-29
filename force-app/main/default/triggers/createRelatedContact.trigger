trigger createRelatedContact on Account (after insert) {
    
    if(trigger.isafter && trigger.isinsert){
        accountHandler.accountTriggerHandler(trigger.new);
    }

}