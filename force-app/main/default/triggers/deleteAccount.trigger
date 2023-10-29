trigger deleteAccount on Account (before delete,after update) {
    if(trigger.isdelete && trigger.isbefore){
        deleteAccountHandler.deleteAccount(trigger.oldmap);
    }
    if(trigger.isAfter && trigger.isupdate){
        updateContactPhone.updatePhone(trigger.newmap, trigger.oldmap);
    }

}