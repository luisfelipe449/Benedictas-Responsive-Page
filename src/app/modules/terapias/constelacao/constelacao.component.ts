import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constelacao',
  templateUrl: './constelacao.component.html',
  styleUrls: ['./constelacao.component.scss']
})
export class ConstelacaoComponent implements OnInit {

   // inject location into component constructor
   constructor(private location: Location) { }

   cancel() {
     this.location.back(); // <-- go back to previous location on cancel
   }

  ngOnInit(): void {
  }

}
