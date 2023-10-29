trigger accountContactTrigger on Account (before update) {
    Map<Id,Account> m = new Map<Id,Account>();
    m=Trigger.newmap;
    List<Contact> con = [Select id,LastName,Accountid,mailingcity from contact where Accountid =: m.keySet()];
    for(Contact c : con){
        Account a= m.get(c.Accountid);
        c.Mailingcity=a.BillingCity;
    }
    update con;
    

}