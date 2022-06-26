import { Component, OnInit } from '@angular/core';
import { Constants } from './config/constants';
import { DataService } from './services/data.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = Constants.SiteTitle;

  constructor(
    private storageService: StorageService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.setSavedDrinks(this.storageService.getItem('drinks'));
  }
}
