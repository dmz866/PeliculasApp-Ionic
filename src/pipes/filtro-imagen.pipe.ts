import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImagen'
})
export class FiltroImagenPipe implements PipeTransform {

  transform(peliculas: any[], field: string): any {
    if (!peliculas) {
      return;
    }

    return peliculas.filter(pelicula => pelicula[field] != null);
  }
}
