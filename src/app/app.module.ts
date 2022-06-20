import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DrinkComponent } from './drink/drink.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RandomComponent } from './random/random.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { SavedComponent } from './saved/saved.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DrinkComponent,
    SearchComponent,
    LandingComponent,
    RandomComponent,
    LoadingSpinnerComponent,
    DrinkDetailsComponent,
    SavedComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
