trigger accountTriggerForDelete on Account (before delete) {
    //accountHandlerForDelete.deleteAccount(trigger.old);
    accountHandler1.preventDelete(trigger.oldmap);
}