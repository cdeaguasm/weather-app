import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {

  @Input() city: string;
  @Input() country: string;

  weather: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnChanges() {
    this.getData();
  }

  getData() {
    if(!this.city && !this.country) {
      return;
    }

    this.weatherService.getWeather(this.city, this.country)
      .subscribe(data => {
        this.weather = new Weather();
        this.weather.city = data.name;
        this.weather.country = data.sys.country;
        this.weather.temp = data.main.temp;
        this.weather.tempMin = data.main.temp_min;
        this.weather.tempMax = data.main.temp_max;
        let weather = data.weather[0];
        this.weather.icon = weather.icon;
        this.weather.description = weather.description;
      });
  }

}
