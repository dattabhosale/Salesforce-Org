trigger updateContactCount on Contact (After insert,After update,After Delete, After undelete) {
    switch on trigger.operationType{
        when AFTER_INSERT{
            updateCountOnAccount.updateCount(trigger.new,trigger.old);
        }
        when AFTER_UPDATE{
            updateCountOnAccount.updateCount(trigger.new,trigger.old);
        }
        when AFTER_DELETE{
            updateCountOnAccount.updateCount(trigger.new,trigger.old);
        }
        when AFTER_UNDELETE{
            updateCountOnAccount.updateCount(trigger.new,trigger.old);
        }
    }
}