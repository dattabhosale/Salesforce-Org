trigger accountExampleTrigger on Account (after insert,after update) {
    if(trigger.isBefore && trigger.isInsert){
        System.debug('IN BEFORE INSERT');
    
    }else if(trigger.isAfter && trigger.isInsert){
        accountTriggerHandler.afterInsert(trigger.new);  
    }else if(trigger.isAfter && trigger.isUpdate){ 
        accountTriggerHandler.afterUpdate(trigger.newMap,trigger.oldMap);
    }
    

}