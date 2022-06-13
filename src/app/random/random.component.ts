import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  randomDrink: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  getRandomDrink() {
    this.apiService.getRandomCocktail().subscribe((data) => {
      console.log(Object.values(data)[0][0]);

      this.randomDrink = Object.values(data)[0][0];
    });
  }
}
