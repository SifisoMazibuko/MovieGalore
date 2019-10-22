import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [

  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies', component: HomePageComponent},
  { path: 'movies/:id', component: MovieDetailComponent},
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
