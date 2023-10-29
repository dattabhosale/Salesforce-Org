trigger OppLineItem on OpportunityLineItem (After insert) {
    updateLineItemCount.updateItemCount(trigger.newMap);

}