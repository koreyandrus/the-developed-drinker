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
  deleteDrink(drink: any) {
    const idx: any = this.drinks.indexOf(drink);
    if (idx !== -1){
    this.drinks.splice(idx, 1);
    localStorage.removeItem('drinks');
    alert('Drink Has Been Deleted');
  }
  }

}
