import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './my-list/movie-details/movie-details.component';
import { MyListComponent } from './my-list/my-list.component';
import { PopulationComponent } from './population/population.component';
import { MovieFormComponent } from './search-movie/movie-form/movie-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  {
    path: '',
    component: SearchMovieComponent,
  },
  {
    path: 'population',
    component: PopulationComponent,
  },
  {
    path: 'mylist',
    component: MyListComponent,
  },
  {
    path: 'form',
    component: MovieFormComponent,
  },
  {
    path: 'mylist/:movieId',
    component: MovieDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
