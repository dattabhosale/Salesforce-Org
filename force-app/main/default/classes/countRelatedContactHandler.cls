public with sharing class countRelatedContactHandler {
    public static void countRelatedContact(List<Contact>newList,List<Contact>oldList) {
        Set<Id> accountIds = new Set<Id>();
        if(newList!=NULL){
            for(Contact con : newList){
                accountIds.add(con.AccountId);
            }
        }
        if(oldList!=NULL){
            for(Contact con : oldList){
                accountIds.add(con.AccountId);
            }
        }
        List<Account> listToUpdate = new List<Account>();
        if(accountIds!=NULL){
            for(Account acc : [Select Id,Name,Total_Contact_Count__c,(Select Id,accountId from Contacts)
             from Account where Id IN :accountIds]){
                listToUpdate.add(new Account(Id=acc.Id,Total_Contact_Count__c=acc.Contacts.size()));
            }
        }
        System.debug('DEBUG : '+listToUpdate);
        if(listToUpdate!=NULL){
            update listToUpdate;
        }
    }
}