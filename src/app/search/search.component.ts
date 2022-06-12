import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = new FormControl('');
  searchResults: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();

    this.searchCocktail(this.searchTerm.value);
  }

  searchCocktail(search: string) {
    this.apiService.searchCocktailName(search).subscribe((data) => {
      console.log(Object.values(data));

      this.searchResults = Object.values(data)[0];
    });
  }
}
