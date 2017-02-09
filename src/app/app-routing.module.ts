import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PollsComponent }  from './poll/polls.component';
import { NewComponent } from "./poll/new.component";
import { VoteComponent } from "./vote/vote.component";
import { ErrorComponent } from './404/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'new', component: NewComponent },
  { path: 'polls',     component: PollsComponent },
  { path: 'voting/:id', component: VoteComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
