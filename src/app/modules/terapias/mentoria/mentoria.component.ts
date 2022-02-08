import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentoria',
  templateUrl: './mentoria.component.html',
  styleUrls: ['./mentoria.component.scss']
})
export class MentoriaComponent implements OnInit {

   // inject location into component constructor
   constructor(private location: Location) { }

   cancel() {
     this.location.back(); // <-- go back to previous location on cancel
   }

  ngOnInit(): void {
  }

}
