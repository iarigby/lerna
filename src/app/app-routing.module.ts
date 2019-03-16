import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/book-search', pathMatch: 'full' },
  {path: 'book-search', component: BookSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
