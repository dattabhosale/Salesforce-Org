trigger contactDescUpdateTrigger on Contact (after update) {
    switch on trigger.operationtype {
        when  AFTER_UPDATE{
            updateAccountDescription.updateAccountDescriptionFromContact(trigger.newMap,trigger.oldMap);
        }
    }
}