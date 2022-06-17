import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveDrinkService {
  drinks: any[] = [];

  constructor() {}

  getDrinks() {
    const drinksJson = localStorage.getItem('drinks');
    this.drinks = drinksJson !== null ? JSON.parse(drinksJson) : [];
    return this.drinks;
  }

  // save drink to local storage
  saveDrink(drink: any) {
    this.getDrinks();
    this.drinks.push(drink);
    localStorage.setItem('drinks', JSON.stringify(this.drinks));
    alert('Added ' + drink.strDrink);
  }

  //delete drink from local storage
  deleteDrinkStorage() {}
}
