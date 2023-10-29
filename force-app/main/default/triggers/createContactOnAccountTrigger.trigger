trigger createContactOnAccountTrigger on Account (after insert) {
    List<Contact> conlist = new List<Contact>();
    for (Account acc : trigger.new) {
        conlist.add(new Contact(LastName=acc.Name+'Contact',Accountid=acc.id));        
    }
    insert conlist;
}