trigger updateOwnerTrigger on Account (after update) {
    Switch on Trigger.operationType{
        when AFTER_UPDATE{
            List<id> accountids = new List<id>();
            For(Account acc : Trigger.new){
                if(acc.OwnerId != Trigger.oldmap.get(acc.id).ownerid){
                    accountids.add(acc.id);
                }
            }
            if(accountids.size()>0){
                List<Contact> c = [select ownerid,Accountid from Contact where Accountid in:accountids];
                for(Contact con : c){
                    con.ownerid = trigger.newmap.get(con.accountid).ownerid;
               }
                update c;
            }
        }
    }

}