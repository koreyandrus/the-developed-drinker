import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private url: string = 'www.thecocktaildb.com/api/json/v1/1/';

  getRandomCocktail() {
    return this.http.get(this.url + 'random.php');
  }

  searchCocktailName(name: string) {
    return this.http.get(this.url + 'search.php?s=' + name);
  }

  searchIngredientName(name: string) {
    return this.http.get(this.url + 'search.php?i=' + name);
  }
}
