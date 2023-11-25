public with sharing class accountDataClass {
    @auraEnabled(cacheable=true)
    public static List<Account> returnAccounts(){
        List<Account> accList = new List<Account>();
        accList =[SELECT Id,Name,Type FROM Account WHERE Type <> NULL LIMIT 5];
        return accList;
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> filterMethod(String typeValue){
        return [SELECT Id,Name,Type FROM Account Where Type=:typeValue LIMIT 5];    
    }
}