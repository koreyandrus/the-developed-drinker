import { Component, OnDestroy, OnInit } from '@angular/core';
import { SaveDrinkService } from '../services/save-drink.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  savedDrinks: any;
  drinksChangedSubscriber: any;

  constructor(private drinkStorage: SaveDrinkService) {}

  ngOnInit(): void {
    this.savedDrinks = this.drinkStorage.getDrinks();
    this.drinksChangedSubscriber = this.drinkStorage.drinksChanged.subscribe();
    console.log(this.savedDrinks);
  }

  ngOnDestroy(): void {
    this.drinksChangedSubscriber.unsubscribe();
  }
}
