import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../app/interfaces/interfaces';
import { environment } from '../environments/environment';

const MOVIEDB_URL = environment.url;
const MOVIEDB_API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private http: HttpClient) { }

  ejecutarQuery<T>(query: string) {
    query = MOVIEDB_URL + query;
    query += `&api_key=${MOVIEDB_API_KEY}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  getFeature() {
    return this.ejecutarQuery<RespuestaMDB>('/discover/movie?primary_release_date.gte=2019-01-01');
  }
}
