trigger createOpportunityTrigger11 on Account (after insert,after update) {
    switch on trigger.operationtype{
        when AFTER_INSERT{
            List<Opportunity> opp = new List<Opportunity>();
            for(Account acc : Trigger.new){
                if(acc.Industry == 'Agriculture'){
                    opp.add(new Opportunity(Name = 'Opp '+Account.Name,Accountid = acc.id,Stagename = 'Prospecting', Amount = 0 , CloseDate = system.today()+90 ));
                }
            }
            if(opp.isEmpty() == false ){
                insert opp;
            }
            
        }
        when AFTER_UPDATE{
           List<Opportunity> opp = new List<Opportunity>();
            for(Account acc : trigger.new ){
                if(acc.Industry == 'Agriculture' ){
                    opp.add(new Opportunity(Name = 'Opp '+Account.Name,Accountid = acc.id,Stagename = 'Prospecting', Amount = 0 , CloseDate = system.today()+90 ));
                }
            }
            if(opp.isEmpty()== false ){
                insert opp;
            }
        }
    }

}