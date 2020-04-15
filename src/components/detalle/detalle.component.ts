import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Pelicula, PeliculaDetalle, Crew } from '../../app/interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: string;
  pelicula: PeliculaDetalle;
  actores: Crew[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getPeliculaDetalle(this.id).subscribe(result => 
    { 
      this.pelicula = result;
    });

    this.movieService.getPeliculaActores(this.id).subscribe(result => 
    { 
      this.actores = result.crew;
    });
  }
}
