import { Component, OnInit } from '@angular/core';
import { SaveDrinkService } from '../services/save-drink.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit {
  isLoading: boolean = false;
  savedDrinks: any;

  constructor(private drinkStorage: SaveDrinkService) {}

  ngOnInit(): void {
    this.savedDrinks = this.drinkStorage.getDrinks();
    console.log(this.savedDrinks);
  }
}
