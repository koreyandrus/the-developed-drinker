import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css'],
})
export class DrinkDetailsComponent implements OnInit {
  @Input() drink: any;
  @Output() closeBtnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closeBtnClick.emit();
  }
}
