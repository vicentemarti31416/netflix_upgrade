import { Component, Input } from '@angular/core';
import { Section } from 'src/app/section';
import { Film } from '../../shared/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  @Input() section: Section = new Section();

}
