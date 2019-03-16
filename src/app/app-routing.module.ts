import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { StudySessionComponent } from './study-session/study-session.component';

const routes: Routes = [
  { path: '', redirectTo: '/book-search', pathMatch: 'full' },
  {path: 'book-search', component: BookSearchComponent},
  { path: 'study-session', component: StudySessionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
