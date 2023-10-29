trigger triggerAccount on Account (before insert,before update) {
    switch on trigger.operationType{
        when BEFORE_UPDATE{
            preventDuplicationAccount.checkDuplicationRecord(trigger.new,trigger.oldMap);
        }
        when BEFORE_INSERT{
            preventDuplicationAccount.checkDuplicationRecord(trigger.new,NULL);
        }
    }
}