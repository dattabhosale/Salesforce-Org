// whenever Contact description is update then its parent description should also get updated
public with sharing class updateAccountDescription {
    public static void updateAccountDescriptionFromContact(Map<Id,Contact>newMap,Map<Id,Contact>oldMap) {
        List<Account> accList = new List<Account>();
        if(newMap!=NULL){
            for(Contact con : newMap.values()){
                if(con.AccountId!=NULL && con.Description != oldMap.get(con.Id).Description){
                    accList.add(new Account(Id=con.AccountId,Description=con.Description));
                }
            }
        }
        if(accList!=NULL){
            update accList;
        }
    }
}