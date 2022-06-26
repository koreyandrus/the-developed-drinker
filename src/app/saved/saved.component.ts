import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { Drink } from '../shared/models/drink';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit {
  isLoading$ = this.loader.loading$;
  search: boolean = false;
  deletedDrink: Drink | null = null;

  constructor(public loader: LoadingService, public dataService: DataService) {}

  ngOnInit(): void {}

  onDeleteDrink($event: Drink) {
    this.deletedDrink = $event;
    setTimeout(() => {
      this.deletedDrink = null;
    }, 3000);
  }
}
