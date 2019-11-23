import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  city: string;
  country: string;

  onSent(valuesForm: any) {
    this.city = valuesForm.city;
    this.country = valuesForm.country;
  }

}
