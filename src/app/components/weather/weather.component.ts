import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather = new Weather();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.weatherService.getWeather()
      .subscribe(data => {
        this.weather.city = data.name;
        this.weather.country = data.sys.country;
        this.weather.temp = data.main.temp;
        this.weather.tempMin = data.main.temp_min;
        this.weather.tempMax = data.main.temp_max;
        let weather = data.weather[0];
        this.weather.icon = weather.icon;
        this.weather.description = weather.description;
        
        console.log(data);
      })
  }

  calculateCelsius(temp: number) {
    return Math.floor(temp - 273.15);
  }

}
