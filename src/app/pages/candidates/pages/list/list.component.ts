import { Component, OnInit } from '@angular/core';
import { CandidatesService } from 'src/app/core/services/candidates.service';
// import { CandidatesService } from './../../../../core/services/index'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  candidates;

  constructor(private candidatesService: CandidatesService) {
    this.getCandidates();
   }

  ngOnInit(): void {
  }

  // createCandidate() {
  //   const data = {
  //     numero: '5',
  //     precio: 9
  //   }
  //   const id = this.candidatesService.getId();
  //   this.candidatesService.createCandidate(id, data);
  // }

  getCandidates() {
    this.candidatesService.getCandidates().subscribe(data => {
      this.candidates = data;
    });
  }

}
