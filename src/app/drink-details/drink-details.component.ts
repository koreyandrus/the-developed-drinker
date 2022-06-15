import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ],
})
export class DrinkDetailsComponent implements OnInit {
  ingredients: string[] = [];
  @Input() drink: any;

  @Output() closeBtnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients() {
    for (let i = 1; i < 15; i++) {
      const ing = this.drink['strIngredient' + i];
      if (ing !== null) {
        this.ingredients.push(ing);
      }
    }
  }

  onClose() {
    this.closeBtnClick.emit();
  }
}
