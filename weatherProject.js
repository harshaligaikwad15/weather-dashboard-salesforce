import { LightningElement, track } from 'lwc';
import getWeather from '@salesforce/apex/WeatherController.getWeather';

export default class WeatherApp extends LightningElement {
    @track city = '';
    @track weatherData;
    @track error;

    handleInputChange(event) {
        this.city = event.target.value;
    }

    handleSearch() {
        if (!this.city) return;
        getWeather({ cityName: this.city })
            .then((result) => {
                this.weatherData = JSON.parse(result);
                this.error = undefined;
            })
            .catch((err) => {
                this.error = err.body.message;
                this.weatherData = undefined;
            });
    }
}