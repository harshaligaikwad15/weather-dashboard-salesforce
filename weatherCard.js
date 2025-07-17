import { LightningElement, api } from 'lwc';

export default class WeatherCard extends LightningElement {
    @api data;

    get cityName() {
        return this.data?.name;
    }

    get temperature() {
        return this.data?.main?.temp;
    }

    get humidity() {
        return this.data?.main?.humidity;
    }

    get windSpeed() {
        return this.data?.wind?.speed;
    }

    get condition() {
        return this.data?.weather && this.data.weather.length > 0
            ? this.data.weather[0].description
            : 'N/A';
    }
}