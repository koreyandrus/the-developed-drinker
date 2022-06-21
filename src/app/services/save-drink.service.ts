import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveDrinkService {
  drinks: any[] = [];
  drinksChanged: Subject<any> = new Subject<any>();

  constructor(private router: Router) {}

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
    this.getDrinks();

    this.drinks = this.drinks.filter((d) => d.idDrink !== drink.idDrink);

    localStorage.setItem('drinks', JSON.stringify(this.drinks));

    this.drinksChanged.next(null);

    alert(drink.strDrink + ' Has Been Deleted');
  }
}
