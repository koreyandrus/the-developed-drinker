import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  savedDrink: Drink | null = null;
  searchTerm = new FormControl('');
  searchResults: Drink[] = [];
  isLoading$ = this.loader.loading$;

  constructor(
    private apiService: ApiService,
    public dataService: DataService,
    public loader: LoadingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.route.snapshot.params['searchTerm']) {
      return;
    }
    this.searchTerm.setValue(this.route.snapshot.params['searchTerm']);
    this.searchCocktail(this.searchTerm.value);
  }

  onSubmit(e: Event) {
    e.preventDefault();

    this.searchCocktail(this.searchTerm.value);
  }

  searchCocktail(search: string) {
    this.loader.show();

    this.router.navigate(['search', search]);

    this.apiService.searchCocktailName(search).subscribe((data) => {
      this.searchResults = data.drinks;
    });
    this.loader.hide();
  }

  onSaveDrink($event: Drink) {
    this.savedDrink = $event;
    setTimeout(() => {
      this.savedDrink = null;
    }, 3000);
  }
}
