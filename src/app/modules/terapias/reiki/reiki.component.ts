import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reiki',
  templateUrl: './reiki.component.html',
  styleUrls: ['./reiki.component.scss']
})
export class ReikiComponent implements OnInit {

   // inject location into component constructor
   constructor(private location: Location) { }

   cancel() {
     this.location.back(); // <-- go back to previous location on cancel
   }

  ngOnInit(): void {
  }

}
