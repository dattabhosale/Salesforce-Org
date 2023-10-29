trigger accountTriggerUpdatePhoneNumber on Account (after update) {
    switch on trigger.operationtype{
        When AFTER_UPDATE{
            updatePhoneHandler.updatePhoneNumber(trigger.newMap,trigger.oldMap);
        }
    }
}