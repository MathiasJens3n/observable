import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from './interfaces/bike';
import { BikeService } from '@services/bike.service';
import { BikeApiService } from '@services/bike-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';
  
  bike$: Observable<Bike> | undefined;
  bikes$: Observable<Bike[]> | undefined;

  constructor(private bikeService: BikeService, private bikeApiService: BikeApiService){
    this.bikes$ = this.bikeService.bikes$;
  }
}