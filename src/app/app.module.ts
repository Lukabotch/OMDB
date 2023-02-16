import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { PopulationComponent } from './population/population.component';
import { MyListComponent } from './my-list/my-list.component';
import { FirstnamePipe } from './pipes/firstname.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearsPipe } from './pipes/years.pipe';
import { FlagsPipe } from './pipes/flags.pipe';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { MovieFormComponent } from './search-movie/movie-form/movie-form.component';
import { MovieDetailsComponent } from './my-list/movie-details/movie-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
    PopulationComponent,
    MyListComponent,
    FirstnamePipe,
    YearsPipe,
    FlagsPipe,
    MyCurrencyPipe,
    MovieFormComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
