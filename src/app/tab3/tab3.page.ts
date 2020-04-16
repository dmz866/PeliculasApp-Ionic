import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../../app/interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritoGeneros: any[];

  constructor(private dataLocalService: DataLocalService,
              private moviesService: MoviesService) {}

  async ionViewWillEnter() {    
    this.peliculas = await this.dataLocalService.cargarFavoritos();
    this.moviesService.cargarGeneros().subscribe(result => 
    {
      this.generos = result.genres;
      this.peliculasPorGenero(this.generos, this.peliculas);
    });
  }

  peliculasPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritoGeneros = [];

    generos.forEach(genero => 
    {
      this.favoritoGeneros.push(
        {
          genero: genero.name,
          peliculas: peliculas.filter(pelicula => 
            {
              return pelicula.genres.find(gene => gene.id === genero.id);
            })
        }
      );  
    });
  }
}
