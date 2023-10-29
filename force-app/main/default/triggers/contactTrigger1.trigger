trigger contactTrigger1 on contact (before update, after update){
    switch on trigger.operationType{
        when BEFORE_UPDATE{
            updateDesc.updateDescrption(trigger.newMap,trigger.oldMap);
        }
    }
}