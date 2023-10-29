public with sharing class accountTriggerHandler {
    public static void afterInsert(List<Account> newList) {
        List<Contact> conList = new List<Contact>();
        if(newList!=NULL){
            for(Account acc : newList){
                if(acc.Is_Phone_Available__c == true){
                    conList.add(new Contact(AccountId=acc.Id,Phone=acc.Phone,LastName=acc.Name));
                }
            }
        }
        if(conList!=NULL){
            insert conList;
        }
    
    }
    public static void afterUpdate(Map<Id,Account> newList,Map<Id,Account>oldList){
        List<Contact> conList = new List<Contact>();
        if(newList!=NULL){ 
            for(Account acc : newList.Values()){
                if(acc.Is_Phone_Available__c == true && oldList.get(acc.Id).Is_Phone_Available__c!=true){
                    conList.add(new Contact(AccountId=acc.Id,Phone=acc.Phone,LastName=acc.Name));
                }
            }
        }
        if(conList!=NULL){
            insert conList;
        }
    }
}