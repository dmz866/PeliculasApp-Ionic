import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../environments/environment';

const MOVIEDB_URL = environment.imagePath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, width: string = 'w500'): any {
    if (!img) {
      return './assets/no-image-banner.jpg';
    }

    return `${MOVIEDB_URL}/${width}${img}`;
  }

}
