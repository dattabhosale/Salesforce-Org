public with sharing class opportunityStageUpdateHandler {
    public static opportunityStageUpdate(List<Account> newList) {
        Set<Id> accIds = new Set<Id>();
        if(newList!=NULL){
            for(Account a : newList){
                accIds.add(a.Id);
            }
        }
        List<Opportunity> updateOppList =  new List<Opportunity>();
        if(accIds!=NULL){
            for(Opportunity opp : [SELECT Id,CreatedDate,StageName 
                                    FROM Opportunity WHERE AccountId IN :accIds 
                                    AND StageName!='Closed Won' AND CreatedDate < LAST_N_DAYS:30 ]){
                                        opp.StageName = 'Closed Lost';
                                        CloseDate=today();
                                        updateOppList.add(opp);
                                    }
        }
        if(updateOppList!=NULL){
            update updateOppList;
        }
    }
}