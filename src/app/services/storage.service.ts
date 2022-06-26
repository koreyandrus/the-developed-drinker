import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const drinksJson = localStorage.getItem(key);
    const data = drinksJson !== null ? JSON.parse(drinksJson) : [];
    return data;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
