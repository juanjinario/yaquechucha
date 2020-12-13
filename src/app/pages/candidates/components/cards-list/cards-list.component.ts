import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() candidatesList;
  @Output() cardClick: EventEmitter<any>;

  constructor() {
    this.cardClick = new EventEmitter<any>();
   }

  ngOnInit(): void {
  }

  onProfileClick($event) {
    this.cardClick.emit($event);
  }

}
