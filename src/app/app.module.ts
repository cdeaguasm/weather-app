import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
