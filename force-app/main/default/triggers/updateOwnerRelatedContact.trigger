trigger updateOwnerRelatedContact on Account (After Update , Before Delete) {
    switch on trigger.operationType{
        when AFTER_UPDATE{
            updateOwnerRelatedContactHandler.updateOwner(trigger.newmap ,trigger.oldmap);
            contactMailCityUpdate.updateMailCity(trigger.oldmap,trigger.newmap);
        }
        when BEFORE_DELETE{
            accountDeleteHandler.deleteAccount(trigger.oldmap);
        }
    }

}