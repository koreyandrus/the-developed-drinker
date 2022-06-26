import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Drink } from '../shared/models/drink';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private savedDrinks$ = new BehaviorSubject<Drink[]>([]);

  get savedDrinks() {
    return this.savedDrinks$.asObservable();
  }

  setSavedDrinks(drinks: Drink[]) {
    this.savedDrinks$.next(drinks);
  }
}
