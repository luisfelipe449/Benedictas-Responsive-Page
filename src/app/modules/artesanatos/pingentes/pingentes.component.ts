import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pingentes',
  templateUrl: './pingentes.component.html',
  styleUrls: ['./pingentes.component.scss']
})
export class PingentesComponent implements OnInit {

  // inject location into component constructor
  constructor(private location: Location) { }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit(): void {
  }

  imageCollection: Array<object> = 
  [
    {
    image: '../../../../assets/ping1.webp',
    thumbImage: '../../../../assets/ping1.webp',
    alt: 'Japamala 1',
    title: '',
}, {
    image: '../../../../assets/ping2.webp',
    thumbImage: '../../../../assets/ping2.webp',
    title: '',
    alt: 'foto-japamala'
},
{
    image: '../../../../assets/ping3.jpg',
    thumbImage: '../../../../assets/ping3.jpg',
    title: '',
    alt: 'foto-japamala'
},
{
    image: '../../../../assets/ping4.webp',
    thumbImage: '../../../../assets/ping4.webp',
    title: '',
    alt: 'foto-japamala'
},
{
    image: '../../../../assets/ping1.webp',
    thumbImage: '../../../../assets/ping1.webp',
    title: '',
    alt: 'foto-japamala'
},
];

}
