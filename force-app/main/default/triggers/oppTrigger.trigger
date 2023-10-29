trigger oppTrigger on Opportunity (After insert, After update, After Delete) {
    
    switch on Trigger.operationType{
        when AFTER_INSERT{
            oppHandler.updateMaxAmountOpp(trigger.new,NULL);
        }
        when AFTER_UPDATE{
            oppHandler.updateMaxAmountOpp(trigger.new,trigger.old);
        }
        when AFTER_DELETE{
            oppHandler.updateMaxAmountOpp(NULL,trigger.old);
        }
    }

}