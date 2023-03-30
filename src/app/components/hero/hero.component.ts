import { Film } from '../../shared/film';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  movies: Film[] = [
    {
      title: 'La casa de papel',
      image: './assets/images/Top10/primero.png'
    },
    {
      title: 'La reina',
      image: './assets/images/Top10/segundo.png'
    },
    {
      title: 'Titanes',
      image: './assets/images/Top10/tercero.png'
    },
    {
      title: 'Lost in Space',
      image: './assets/images/Top10/cuarto.png'
    },
    {
      title: 'The good doctor',
      image: './assets/images/Top10/quinto.png'
    },
  ]

}
