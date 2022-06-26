import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { Drink } from '../shared/models/drink';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit, OnDestroy {
  isLoading$ = this.loader.loading$;
  search: boolean = false;
  savedDrinks: Drink[] = [];

  constructor(public loader: LoadingService, public dataService: DataService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
