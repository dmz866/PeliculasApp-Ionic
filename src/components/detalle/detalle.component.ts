import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: string;
  slideOptsActores = {
    slidePerView: 1.3,
    freeMode: true,
    spaceBetween: -15
  };
  pelicula: PeliculaDetalle;
  actores: Cast[] = [];
  oculto: number = 150;
  favorito: string = 'star-outline';

  constructor(private movieService: MoviesService, 
              private modalCtrl: ModalController,
              private dataLocalService: DataLocalService) 
  { }

  async ngOnInit() {
    this.dataLocalService.existePelicula(this.id).then(result => 
    {
      this.favorito = (result) ? 'star' : 'star-outline';
    });    

    this.movieService.getPeliculaDetalle(this.id).subscribe(result => 
    { 
      this.pelicula = result;
    });

    this.movieService.getPeliculaActores(this.id).subscribe(result => 
    { 
      this.actores = result.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  guardarFavorito() {
    const existe = this.dataLocalService.guardarPelicula(this.pelicula);  
    this.favorito = (!existe) ? 'star' : 'star-outline';
  }
}
