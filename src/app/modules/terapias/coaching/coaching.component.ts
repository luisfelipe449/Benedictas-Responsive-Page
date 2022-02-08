import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss']
})
export class CoachingComponent implements OnInit {

   // inject location into component constructor
   constructor(private location: Location) { }

   cancel() {
     this.location.back(); // <-- go back to previous location on cancel
   }

  ngOnInit(): void {
  }

}
