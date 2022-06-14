import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = new FormControl('');
  searchResults: any;
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();

    this.searchCocktail(this.searchTerm.value);
  }

  searchCocktail(search: string) {
    this.searchResults = null;
    if (!this.searchResults) {
      this.isLoading = true;
    }
    this.apiService.searchCocktailName(search).subscribe((data) => {
      if (data) {
        this.isLoading = false;
      }
      console.log(Object.values(data));

      this.searchResults = Object.values(data)[0];
    });
  }
}
