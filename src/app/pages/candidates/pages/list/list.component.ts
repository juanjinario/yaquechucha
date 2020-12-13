import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICandidate } from 'src/app/core/models';
import { CandidatesService, GlobalService } from 'src/app/core/services/index';
import { fadeInOut } from '../../../../shared/animations';
// import { CandidatesService } from './../../../../core/services/index'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [fadeInOut],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  $candidates: Observable<any>;

  constructor(private candidatesService: CandidatesService, private globalService: GlobalService,
              private router: Router) {
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
    this.$candidates = this.candidatesService.getCandidates();
    // this.candidatesService.getCandidates().subscribe(data => console.log(data));
  }

  goToProfile(profile: ICandidate) {
    this.globalService.candidateProfile = profile;
    console.log(this.globalService.candidateProfile);
    this.router.navigate([`/candidates/${profile.id}`]);
  }

}
