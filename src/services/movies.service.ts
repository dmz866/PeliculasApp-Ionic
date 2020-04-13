import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private http: HttpClient) { }

  getFeature() {
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/movie/550?api_key=4208517fc3bbee1ef43597f5e7f87ff9');
  }
}
