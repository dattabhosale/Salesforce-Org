public with sharing class integrationExample {
    public static void integrationExampleMethod() {
        String ipAddress='49.15.248.78';
        String endpoint ='http://xml.utrace.de/?query='+ipAddress;
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        HttpResponse res = h.send(req);
        String responce = res.getBody();
        System.debug(responce);
    }
}