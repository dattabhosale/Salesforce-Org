@isTest
public with sharing class Covid19Test {
    @isTest
    public static void getCount(){
        Covid19 c = new Covid19(10);
        System.assertEquals(10,c.getTreated(), 'Treated patient should be 10');
        c.treatPatient();
        System.assertEquals(11, c.getTreated(), 'Treated Patient should be 11');
    }
}