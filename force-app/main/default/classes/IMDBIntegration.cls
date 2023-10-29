public with sharing class IMDBIntegration {
    @AuraEnabled(cacheable=true)
    public static String searchByName(String movieName) {
        Http h = new Http();
        HttpRequest request = new HttpRequest();
        request.setMethod('GET');
        request.setEndpoint('https://api.collectapi.com/imdb/imdbSearchByName?query='+movieName);
        request.setHeader('Authorization', 'apikey 1STKVLnnA4olahdUwfUbTu:6Jc0UQwOATDcOCJOw1386U');
        HttpResponse responce = new  HttpResponse();
        responce = h.send(request);
        System.debug(responce.getBody());
        return responce.getBody();
    }
}