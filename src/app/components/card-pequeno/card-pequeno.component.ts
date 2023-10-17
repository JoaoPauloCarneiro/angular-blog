import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pequeno',
  templateUrl: './card-pequeno.component.html',
  styleUrls: ['./card-pequeno.component.css']
})
export class CardPequenoComponent implements OnInit {
  @Input ()
  fotoCoverpequeno: string = ""
  @Input ()
  cardpequenotitle: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
