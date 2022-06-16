import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  randomDrink: any;
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  getRandomDrink() {
    this.randomDrink = null;
    if (!this.randomDrink) {
      this.isLoading = true;
    }
    this.apiService.getRandomCocktail().subscribe((data) => {
      if (data) {
        this.isLoading = false;
      }

      this.randomDrink = Object.values(data)[0][0];
    });
  }
}
