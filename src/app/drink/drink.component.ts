import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from '../services/data.service';
import { StorageService } from '../services/storage.service';
import { Drink } from '../shared/models/drink';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
})
export class DrinkComponent implements OnInit {
  @Input() drink!: Drink;
  saved!: boolean;
  @Input() search!: boolean;
  @Output() drinkEmitter = new EventEmitter<Drink>();

  showDetails: boolean = false;

  constructor(
    private dataService: DataService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    let dataSub = this.dataService.savedDrinks
      .pipe(
        map((drinks) => {
          this.saved = drinks.some(
            (drink) => drink.idDrink === this.drink.idDrink
          );
        })
      )
      .subscribe();
    dataSub.unsubscribe();
  }

  onShowDetails() {
    this.showDetails = true;
  }

  onCloseDetails() {
    this.showDetails = false;
  }

  onSaveDrink() {
    let dataSub = this.dataService.savedDrinks
      .pipe(
        map((data) => {
          if (data.some((drink) => drink.idDrink === this.drink.idDrink)) {
            return;
          }
          let newSavedDrinks = [...data, this.drink];
          this.drinkEmitter.emit(this.drink);
          this.dataService.setSavedDrinks(newSavedDrinks);
          this.storage.setItem('drinks', newSavedDrinks);
        })
      )
      .subscribe();
    dataSub.unsubscribe();
    this.saved = true;
  }

  onDeleteDrink() {
    let dataSub = this.dataService.savedDrinks
      .pipe(
        map((data) => {
          let newSavedDrinks = data.filter(
            (drink) => drink.idDrink !== this.drink.idDrink
          );
          this.dataService.setSavedDrinks(newSavedDrinks);
          this.storage.setItem('drinks', newSavedDrinks);
        })
      )
      .subscribe();

    dataSub.unsubscribe();
    this.drinkEmitter.emit(this.drink);
    this.saved = false;
  }
}
