import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  slideOptions = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
