import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Pelicula[] = [];
  peliculasPopulares: Pelicula[] = [];
  
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature().subscribe(result => 
    {
      this.peliculasRecientes = result.results;
    });

    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe(result => 
    {
      const arrTemp = [...this.peliculasPopulares, ...result.results];
      this.peliculasPopulares = arrTemp;
    });
  }

  cargarMas() {
    this.getPopulares();
  }
}
