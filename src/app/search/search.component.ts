import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { Drink } from '../shared/models/drink';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = new FormControl('');
  searchResults: Drink[] = [];
  isLoading$ = this.loader.loading$;

  constructor(
    private apiService: ApiService,
    public dataService: DataService,
    public loader: LoadingService
  ) {}

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();

    this.searchCocktail(this.searchTerm.value);
  }

  searchCocktail(search: string) {
    this.loader.show();

    this.apiService.searchCocktailName(search).subscribe((data) => {
      this.searchResults = data.drinks;
      this.loader.hide();
    });
  }
}
