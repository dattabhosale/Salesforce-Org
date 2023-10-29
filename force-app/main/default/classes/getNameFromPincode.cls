public with sharing class getNameFromPincode {
    @AuraEnabled(cacheable=true)
    public static List<String> getNameFromPincodeIn(String input) {
        List<String> returnName = new List<String>();
        Http h = new Http();
        String endpoint ='https://api.postalpincode.in/pincode/'+input;
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpoint);
        request.setMethod('GET');
        HttpResponse responce = h.send(request);
        String body = responce.getBody();
        System.JSONParser jp = JSON.createParser(body);
        while(jp.nextToken()!=NULL){
            if(jp.getText()=='Name'){
                jp.nextToken();
                returnName.add(jp.getText());
            }
            if(jp.getText()=='Circle'){
                jp.nextToken();
                returnName.add(jp.getText());
            }
        }
        return returnName;
    }
}