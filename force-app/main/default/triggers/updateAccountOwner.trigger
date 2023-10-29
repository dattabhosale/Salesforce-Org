trigger updateAccountOwner on Account (after update) {
    switch on trigger.operationtype{
        when AFTER_UPDATE{
            List<id> accountids = new List<id>();
            for(Account acc : trigger.new){
                if(acc.Ownerid != trigger.oldmap.get(acc.id).Ownerid){
                    accountids.add(acc.Id);
                }
            }
            if(accountids.size()>0){
                List<Contact> con = [Select id,Accountid,LastName from Contact where Accountid =: accountids];
                for(Contact c : con){
                    c.OwnerId=trigger.newmap.get(c.accountid).ownerid;
                }
                update con;
            }
            
        }
    }
}