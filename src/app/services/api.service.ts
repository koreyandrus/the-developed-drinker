import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drink } from '../shared/models/drink';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private url: string = Constants.API_ENDPOINT;

  getRandomCocktail() {
    return this.http.get(this.url + 'random.php');
  }

  searchCocktailName(name: string) {
    return this.http.get<{ drinks: Drink[] }>(
      this.url + 'search.php?s=' + name
    );
  }

  searchIngredientName(name: string) {
    return this.http.get(this.url + 'search.php?i=' + name);
  }
}
