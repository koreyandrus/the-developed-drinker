import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
})
export class DrinkComponent implements OnInit {
  @Input() drink: any;
  showDetails: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onShowDetails() {
    this.showDetails = true;
    console.log(this.drink);
  }

  onCloseDetails() {
    this.showDetails = false;
  }
}
