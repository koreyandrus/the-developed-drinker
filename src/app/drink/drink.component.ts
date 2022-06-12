import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
})
export class DrinkComponent implements OnInit {
  @Input() drink: any;

  constructor() {}

  ngOnInit(): void {}
}
