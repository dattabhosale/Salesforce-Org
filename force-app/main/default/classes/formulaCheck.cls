public with sharing class formulaCheck {
    public static void formulaField(){

        Account acc = [SELECT Id,Name,Is_Website_Available__c FROM Account WHERE Website=NULL LIMIT 1];
        System.assertEquals(true,acc.Is_Website_Available__c);
        acc.Website='www.formula.com';
        system.assertEquals(false,acc.Is_Website_Available__c);
        
    }
}