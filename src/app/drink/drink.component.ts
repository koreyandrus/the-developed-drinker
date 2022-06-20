import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SaveDrinkService } from '../services/save-drink.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
})
export class DrinkComponent implements OnInit {
  @Input() drink: any;

  switch: boolean = true;
  showDetails: boolean = false;

  constructor(private saveDrinkService: SaveDrinkService) {}

  ngOnInit(): void {}

  onShowDetails() {
    this.showDetails = true;
    console.log(this.drink);
  }

  onCloseDetails() {
    this.showDetails = false;
  }

  onSaveDrink() {
    this.saveDrinkService.saveDrink(this.drink);
    this.switch = ! this.switch;
  }

  onDeleteDrink(){
    this.saveDrinkService.deleteDrink(this.drink);

  }



}
