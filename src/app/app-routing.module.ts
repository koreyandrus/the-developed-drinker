import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RandomComponent } from './random/random.component';
import { SavedComponent } from './saved/saved.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:searchTerm', component: SearchComponent },
  { path: 'random', component: RandomComponent },
  { path: 'saved', component: SavedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
