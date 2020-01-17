import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { DocumentComponent } from './document/document.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', redirectTo: 'personal-information', pathMatch: 'full'},
  { path: 'personal-information', component: PersonalComponent },
  { path: 'documents-upload',      component: DocumentComponent },
  { path: 'review-details',       component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
