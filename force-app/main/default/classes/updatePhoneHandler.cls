/*
    whenever Account Phone Number update also update realted all contact Phone field 
*/
public with sharing class updatePhoneHandler {
    public static void updatePhoneNumber(Map<Id,Account> newMap,Map<Id,Account> oldMap) {
        set<Id> accountIds = new Set<Id>();
        if(newMap != NULL){
            for(Account acc : newMap.values()){
                if(acc.Phone != oldMap.get(acc.id).Phone){
                    accountIds.add(acc.id);
                }
            }
        }
        
        List<Contact> updateList = new List<Contact>();
        if(accountIds!=NULL){
            List<Contact> con = [select Id,Phone,AccountId from Contact where AccountId IN : accountIds];
            for(Contact c : con){
                c.Phone = newMap.get(c.AccountId).Phone;
                updateList.add(c);
            }
            /* This Approch is not best practice
            for(Account acc : [select id,Phone,(select id,phone from Contacts) where id IN :accountIds]){
                for(Contacts con : acc.coontats){
                    con.Phone = acc.Phone;
                }
            }*/
        }
        if(updateList != NULL){
            update updateList;
        } 
    }
}