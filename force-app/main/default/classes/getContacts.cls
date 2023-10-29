public with sharing class getContacts {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactfromObj(String accId){
        try {
            return [SELECT Id,Name,AccountId from Contact where AccountId =:accId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}