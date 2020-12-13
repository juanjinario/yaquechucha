import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CandidatesComponent } from './candidates.component';
import { ListComponent } from './pages/list/list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';


@NgModule({
  declarations: [
    CandidatesComponent,
    ListComponent,
    ProfileComponent,
    CardComponent,
    CardsListComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    SharedModule
  ]
})
export class CandidatesModule { }
