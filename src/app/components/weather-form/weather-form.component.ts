import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent {

  _city: string;
  _country: string;
  @Output() sent = new EventEmitter<any>();
  
  constructor() { }

  onSend() {
    this.sent.emit({
      city: this._city,
      country: this._country
    });
  }

}
