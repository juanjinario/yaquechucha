import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICandidate } from 'src/app/core/models/index';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() candidate: ICandidate;
  @Output() viewProfileClick: EventEmitter<any>;

  constructor() {
    this.viewProfileClick = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  viewProfile(candidate): void {
    this.viewProfileClick.emit(candidate);
  }

}
