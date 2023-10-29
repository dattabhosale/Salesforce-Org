trigger createAccountTrigger1 on Account (after insert) {
    switch on Trigger.operationType{
        when AFTER_INSERT{
            List<Contact> con = New List<Contact>();
            for(Account acc: Trigger.new){
                con.add(new contact(LastName=acc.Name+' Con',Accountid=acc.id));
                //Contact newContact = new Contact(LastName=acc.Name+' Con', AccountId=acc.Id);
                //con.add(newContact);
            }
            insert con;
        }
    }

}