import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar: string = '';
  ideas: string[] = ['Spiderman', 'Superman', 'Senor de los Anillos', 'La vida es bella'];
  peliculas: Pelicula[] = [];
  cargando: boolean ;

  constructor(private movieService: MoviesService, private modalCtrl: ModalController) {}

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

  buscar(event) {
    this.cargando = true;
    if (event.detail.value) {
      this.movieService.buscarPeliculas(event.detail.value).subscribe((result: any) => 
      {
        this.peliculas = result.results;
        this.cargando = false;
      });
    }
  }
}
