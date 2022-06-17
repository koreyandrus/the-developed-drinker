import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveDrinkService {

  constructor() { }


getSaveDrink(){
  localStorage.getItem('key');
  // JSON.parse(localStorage.getItem('key'));
}

// save drink to local storage
saveDrinkStorage(drink: any){
  localStorage.setItem('key', drink);
  // localStorage.setItem('key', JSON.stringify(object));
}

//delete drink from local storage
deleteDrinkStorage(){

}

}
