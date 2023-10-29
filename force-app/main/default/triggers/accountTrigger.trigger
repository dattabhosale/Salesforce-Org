trigger accountTrigger on Account (After update) {
    switch on Trigger.operationType{
        when AFTER_UPDATE  {
            List<id> accountids = new List<id>();
            for(Account acc : Trigger.new){
                if(acc.ownerid != Trigger.oldMap.get(acc.id).ownerid){
                    accountids.add(acc.id);
                }
            }
            if(accountids.size() !=0){
                List<Contact> cont = [select id,ownerid,Accountid from contact where Accountid =: accountids];
                for(contact con : cont){
                    con.ownerid=Trigger.newMap.get(con.Accountid).ownerid;
                }
                update cont;

            }
        }
       
    }

}