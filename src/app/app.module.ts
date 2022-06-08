import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DrinkComponent } from './drink/drink.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, DrinkComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
