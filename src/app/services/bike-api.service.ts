import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../interfaces/bike';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeApiService {

  constructor(private httpClient : HttpClient) { }

  fetchbike(): Observable<Bike> {
    return this.httpClient.get<Bike>('https://localhost:5000/api/motocross/1');
  }
}
