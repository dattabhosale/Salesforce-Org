@IsTest
public with sharing class FitnessTest {
    @IsTest
    public static void fitnessPositiveTest() {
        Fitness f = new Fitness();
        System.assertEquals(0.2,f.calculateBMI(20,10) ,'Not Equal');
    }
}