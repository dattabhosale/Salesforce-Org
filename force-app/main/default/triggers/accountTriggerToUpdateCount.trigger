trigger accountTriggerToUpdateCount on Contact (after insert,after update,after delete,after undelete) {
    switch on trigger.operationType {
        when AFTER_INSERT {
            countRelatedContactHandler.countRelatedContact(trigger.new,NULL);
        }
        when AFTER_UPDATE {
            countRelatedContactHandler.countRelatedContact(trigger.new,trigger.old);
        }
        when AFTER_DELETE{
            countRelatedContactHandler.countRelatedContact(NULL,trigger.old);
        }
        when AFTER_UNDELETE{
            countRelatedContactHandler.countRelatedContact(trigger.new,NULL);
        }
    }
}