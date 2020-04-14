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
  private popularesPage = 0;
  
  constructor(private http: HttpClient) { }

  ejecutarQuery<T>(query: string) {
    query = MOVIEDB_URL + query;
    query += `&api_key=${MOVIEDB_API_KEY}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  getFeature() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;

    if ( mes < 10) {
      mesString = (mes < 10) ? ('0' + mes) : mes;
    }

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const final = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${final}`);
  }

  getPopulares() {
    this.popularesPage++;
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`);
  }
}
