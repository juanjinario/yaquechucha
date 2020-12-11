import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'candidates',
    loadChildren: () =>
      import('./pages/candidates/candidates.module').then(
        m => m.CandidatesModule
      )
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: '',
    redirectTo: '/candidates',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
