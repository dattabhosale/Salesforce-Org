trigger createOpportunityTrigger on Account (after insert,after update) {
    
    switch on Trigger.operationType{
        when AFTER_INSERT{
            List<Opportunity> opp = new List<Opportunity>();
            for(Account acc : Trigger.new){
                if(acc.Industry=='Agriculture'){
                    opp.add(new Opportunity(Name=acc.Name+' Opportunity',Accountid=acc.Id,StageName = 'Prospecting', Amount = 0, CloseDate = system.today()+90));
                }
            }
            if(opp.size()>0){
                insert opp;
            }           
        }
        when AFTER_UPDATE{
            List<Opportunity> opp = new List<Opportunity>();
            for(Account acc : Trigger.new){
                if(acc.Industry=='Agriculture'){
                    opp.add(new Opportunity(Name=acc.Name+' Opportunity',Accountid=acc.Id,StageName='Prospecting',Amount=0,CloseDate=system.today()+90));
                }
            }
            if(opp.isEmpty()==False){
                insert opp;
            }
        }
    }

}