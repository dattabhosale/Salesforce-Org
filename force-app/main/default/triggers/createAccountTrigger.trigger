trigger createAccountTrigger on Contact (after insert) {
    Contact con = Trigger.new[0];
    Account acc= new Account();
    acc.Name=con.LastName + ' Company';
    
    
    insert acc;

}