import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('hamburguerX', [
      /*
        state hamburguer => is the regular 3 lines style.
        states topX, hide, and bottomX => used to style the X element
      */
      state('hamburguer', style({})),
      // style top bar to create the X
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      // hides element when create the X (used in the middle bar)
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      // style bottom bar to create the X
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      transition('* => *', [
        animate('0.2s'), // controls animation speed
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Benedictas-Header-com-Sidenav';
   // flag be consumed by the template
   isHamburguer = true;
   onClick() {
     this.isHamburguer = !this.isHamburguer;
   }
}
