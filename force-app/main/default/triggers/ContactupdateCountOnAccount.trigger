trigger ContactupdateCountOnAccount on Contact (After insert,After update,After Delete,After Undelete) {
    switch on trigger.operationType{
        When AFTER_INSERT {
            updateContactCountOnAccount.updateCount( trigger.new , trigger.old );
        }
        When AFTER_UPDATE{
            updateContactCountOnAccount.updateCount( trigger.new , trigger.old );
        }
        When AFTER_DELETE{
            updateContactCountOnAccount.updateCount( trigger.new , trigger.old );
        }
        When AFTER_UNDELETE{
            updateContactCountOnAccount.updateCount( trigger.new , trigger.old );
        }
    }
}