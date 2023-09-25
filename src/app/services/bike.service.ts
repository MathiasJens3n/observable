import { Injectable } from '@angular/core';
import { Bike } from '../interfaces/bike';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private nextId: number = 0;
  private bikes: Array<Bike> = [];
  private bikeSubject$: Subject<Bike[]> = new BehaviorSubject<Bike[]>(this.bikes);
  bikes$: Observable<Bike[]> = this.bikeSubject$.asObservable();

  constructor() {

    this.bikes = [
      {id: 1,model: "KTM",power: "48 hp",topSpeed: 150,transmission: "6 gear",weight: 116,year: 2022},
      {id: 2,model: "Yamaha",power: "40 hp",topSpeed: 130,transmission: "6 gear",weight: 106,year: 2022},
      {id: 3,model: "Honda",power: "46 hp",topSpeed: 160,transmission: "6 gear",weight: 126,year: 2022},
      {id: 4,model: "Suzuki",power: "38 hp",topSpeed: 110,transmission: "6 gear",weight: 96,year: 2022},
      {id: 5,model: "Kawasaki",power: "44 hp",topSpeed: 120,transmission: "6 gear",weight: 107,year: 2022}
    ];

    this.bikeSubject$.next(this.bikes);
    this.nextId = 6; 
  }
  
  addBike(bike: Bike) : void {
    bike.id = this.nextId;
    this.bikes.push(bike);
    this.bikeSubject$.next(this.bikes);
    this.nextId++;
  }

  emitrandombike(): Observable<Bike>{
    return of(this.bikes[Math.floor(Math.random() * this.bikes.length)]);
  }
}
