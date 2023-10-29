trigger leadErrorTrigger on Lead (before insert,before update) {
    if(trigger.isinsert || trigger.isupdate){
        leadHandler.leadError(trigger.new);
    }

}