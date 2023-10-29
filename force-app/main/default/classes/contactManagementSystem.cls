public with sharing class contactManagementSystem {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactDetails(String searchKeyword) {
        if(string.isNotBlank(searchKeyword)){
            String key = '%'+searchKeyword+'%';
            return  [SELECT Id,AccountId,Email,Phone,FirstName,LastName,Account.Name,Title FROM Contact WHERE AccountId!= NULL AND LastName LIKE : key];

        }else {
            return  [SELECT Id,AccountId,Email,Phone,FirstName,LastName,Account.Name,Title FROM Contact  WHERE AccountId!= NULL ORDER BY LastModifiedDate DESC LIMIT 30 ];
        }
    }
    @AuraEnabled
    public static void deleteContactRecord(String conId){
        Contact con = [SELECT Id FROM Contact WHERE Id =: conId];
        delete con;
    }
    @AuraEnabled
    public static void bulkDelete(List<Id> contactIds){
        List<Contact> lstContDelete = [SELECT Id FROM Contact WHERE Id IN : contactIds];
        delete lstContDelete;
    }
}