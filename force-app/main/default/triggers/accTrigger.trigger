trigger accTrigger on Account (before insert,before update) {
    if(trigger.isupdate){
        for(Account acc : trigger.new){
            if(acc.Rating=='Hot'){
                acc.Type='Prospect';
            }
            
        }
    }
  
}