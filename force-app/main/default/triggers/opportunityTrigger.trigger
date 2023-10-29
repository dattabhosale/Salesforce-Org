trigger opportunityTrigger on Opportunity (before update) {
    Map<Id,Opportunity> m = new Map<Id,Opportunity>();
    m=Trigger.oldmap;
    for(Opportunity opp : Trigger.new){
        if(opp.Amount !=m.get(opp.id).Amount){
            opp.Amount.addError('You Cannot Change Amount');
        }
    }

}