public with sharing class safeNav {
    public static void newMet(){
        String accName= [select Id,Name from Account where Name='Asus' limit 1]?.Name;
        System.debug(accName);
    }
}