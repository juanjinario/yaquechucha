
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, pluck, takeUntil } from 'rxjs/operators';
import { ICandidate, IProposal } from '../../../../core/models/index';

import { GlobalService, CandidatesService } from 'src/app/core/services/index';
import { fadeInOut } from '../../../../shared/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [fadeInOut]
})
export class ProfileComponent implements OnDestroy {
  $candidateProfile: Observable<ICandidate>;
  $proposals: Observable<IProposal[]>;
  private unsubscribe: Subject<void>;
  candidateId: string;

  constructor(
    private candidatesService: CandidatesService,
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.unsubscribe = new Subject();
    if (globalService.candidateProfile) {
      // $candidateProfile
      this.candidateId = globalService.candidateProfile.id;
      this.$candidateProfile = of(globalService.candidateProfile);
      this.getProposals(this.candidateId);
    } else {
      this.getProfileFromUri();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getProfileFromUri(): void {
    this.route.params
      .pipe(
        takeUntil(this.unsubscribe),
        pluck('id')
      )
      .subscribe(id => {
        this.getCandidate(id);
        this.getProposals(id);
      });
  }

  getCandidate(id): void {
    this.$candidateProfile = this.candidatesService.getCandidate(id);
  }

  getProposals(id): void {
    this.$proposals = this.candidatesService.getProposals(id);
  }
}
