import { Component } from '@angular/core';
import { Section } from './section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NETFLIX';

  accion: Section = {
    section: 'ACCIÓN',
    films: [
      {
        title: 'El ejército de los muertos',
        image: './assets/images/Accion/ejercitomuertos.jpg'
      },
      {
        title: 'El protector',
        image: './assets/images/Accion/elprotector.webp'
      },
      {
        title: 'The equalizer 2',
        image: './assets/images/Accion/equalizer2.webp'
      },
      {
        title: 'Heat',
        image: './assets/images/Accion/heat.webp'
      },
      {
        title: 'Jack Reacher',
        image: './assets/images/Accion/jackreacher.webp'
      }
    ]
  }

  comedy: Section = {
    section: 'COMEDIA',
    films: [
      {
        title : 'Casi 300',
        image : './assets/images/Comedia/casi300.webp'
      },
      {
        title : 'Cazafantasmas',
        image : './assets/images/Comedia/cazafantasmas.webp'
      },
      {
        title : 'El dictador',
        image : './assets/images/Comedia/dictador.webp'
      },
      {
        title : 'Juerga',
        image : './assets/images/Comedia/juerga.webp'
      },
      {
        title : 'Family Guy',
        image : './assets/images/Comedia/family guy.webp'
      }
    ]
  }

  drama: Section = {
    section: 'DRAMA',
    films: [
      {
        title : '1917',
        image : './assets/images/Drama/1917.webp'
      },
      {
        title : 'Arrival',
        image : './assets/images/Drama/arrival.webp'
      },
      {
        title : 'Corazones de acero',
        image : './assets/images/Drama/corazones.webp'
      },
      {
        title : 'La milla verde',
        image : './assets/images/Drama/millaverde.webp'
      },
      {
        title : 'Salvar al soldado Ryan',
        image : './assets/images/Drama/salvaralsoldado.webp'
      }
    ]
  }

  scifi: Section = {
    section: 'SCI-FY',
    films: [
      {
        title : 'El sexto día',
        image : './assets/images/Sci-fi/6dia.webp'
      },
      {
        title : '12 monos',
        image : './assets/images/Sci-fi/12monos.webp'
      },
      {
        title : 'After earth',
        image : './assets/images/Sci-fi/afterearth.webp'
      },
      {
        title : 'Core',
        image : './assets/images/Sci-fi/core.webp'
      },
      {
        title : 'Jumper',
        image : './assets/images/Sci-fi/jumper.webp'
      }
    ]
  }

  terror: Section = {
    section: 'TERROR',
    films: [
      {
        title : 'El apostol',
        image : './assets/images/Terror/apostol.jpg'
      },
      {
        title : 'La calle del terror',
        image : './assets/images/Terror/calleterror.jpg'
      },
      {
        title : 'Insidious 2',
        image : './assets/images/Terror/insidious2.webp'
      },
      {
        title : 'Life',
        image : './assets/images/Terror/life.webp'
      },
      {
        title : 'Multiple',
        image : './assets/images/Terror/multiple.webp'
      }
    ]
  }
}
