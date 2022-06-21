import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SaveDrinkService } from '../services/save-drink.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
})
export class DrinkComponent implements OnInit, OnDestroy {
  changeSubject = this.saveDrinkService.drinksChanged.subscribe();

  @Input() drink: any;
  @Input() saved!: boolean;

  showDetails: boolean = false;

  constructor(private saveDrinkService: SaveDrinkService) {}

  ngOnInit(): void {}

  onShowDetails() {
    this.showDetails = true;
  }

  onCloseDetails() {
    this.showDetails = false;
  }

  onSaveDrink() {
    this.saveDrinkService.saveDrink(this.drink);
  }

  onDeleteDrink() {
    this.saveDrinkService.deleteDrink(this.drink);
  }

  ngOnDestroy(): void {
    this.changeSubject.unsubscribe();
  }
}
