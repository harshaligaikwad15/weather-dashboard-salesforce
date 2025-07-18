public with sharing class WeatherController {
    @AuraEnabled(cacheable=true)
    public static String getWeather(String cityName) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        String endpoint = 'https://api.openweathermap.org/data/2.5/weather?q=' + EncodingUtil.urlEncode(cityName, 'UTF-8') +
                          '&appid=6151cb9bc1b44cd66a4078ad4302be3a&units=metric';
        request.setEndpoint(endpoint);
        request.setMethod('GET');
        
        try {
            HttpResponse response = http.send(request);
            if (response.getStatusCode() == 200) {
                return response.getBody();
            } else {
                throw new AuraHandledException('Failed to fetch weather data.');
            }
        } catch (Exception e) {
            throw new AuraHandledException('Error: ' + e.getMessage());
        }
    }
}