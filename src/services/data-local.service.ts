import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../app/interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  peliculas: PeliculaDetalle[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) { 
    this.cargarFavoritos();
  }

  guardarPelicula(pelicula: PeliculaDetalle) {
    let mensaje;
    const existe = this.peliculas.find(p => p.id === pelicula.id);
    if (!existe) {
      this.peliculas.push(pelicula);      
      mensaje = 'Pelicula agregada a favoritos';
    }    
    else {
      this.peliculas = this.peliculas.filter(p => p.id !== pelicula.id);
      mensaje = 'Pelicula eliminada de favoritos';
    }

    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
    return (existe) ? true : false;
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create(
                        {
                          message: mensaje,
                          duration: 2000
                        });
      
    toast.present();
  }

  async cargarFavoritos() {
    this.peliculas = await this.storage.get('peliculas') || [];   
    return this.peliculas;
  }

  async existePelicula(id: string) {
    await this.cargarFavoritos(); 
    return (this.peliculas.find(p => p.id === Number(id))) ? true : false;
  }
}
