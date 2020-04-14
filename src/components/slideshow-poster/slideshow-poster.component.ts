import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true
  };
  constructor() { }

  ngOnInit() {}

}
