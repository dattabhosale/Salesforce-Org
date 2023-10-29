trigger createContact on Account (After insert) {
    switch on Trigger.operationType {
        when AFTER_INSERT{
            List<Contact> contacts = new List<Contact>();
            for(Account acc : Trigger.new){
                Contact newContact = new Contact(LastName=acc.Name, AccountId=acc.Id);
                contacts.add(newContact);
            }
            insert contacts;
        }
    }

}