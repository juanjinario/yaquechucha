import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { DisorderListPipe } from './pipes/disorder-list.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    DisorderListPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    FlexLayoutModule,
    FooterComponent,
    HeaderComponent,
    DisorderListPipe
  ]
})
export class SharedModule { }
