trigger updateOwnerOfContactTrigger on Account (After insert,After update,After delete) {
    Switch on trigger.operationType{
        when AFTER_UPDATE{
            updateContactOwnerHandler.updateOwnerOfRelatedContact(trigger.newmap,trigger.oldmap);
            //updateContactCount.contactCount(trigger.new);
        }
        when AFTER_INSERT{
            //updateContactCount.contactCount(trigger.new);
        }
        when AFTER_DELETE{
            //updateContactCount.contactCount(trigger.old);
        }
    }

}