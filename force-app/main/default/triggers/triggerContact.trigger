trigger triggerContact on Contact (after insert,after update,after delete) {
    switch on trigger.operationType{
        when AFTER_INSERT{
            contactCountHandler.countContact(trigger.newMap,NULL);
            
        }
        when AFTER_UPDATE{
            contactCountHandler.countContact(trigger.newMap,trigger.oldMap);
        }
        when AFTER_DELETE{
            contactCountHandler.countContact(NULL,trigger.oldMap);
        }
    }
}