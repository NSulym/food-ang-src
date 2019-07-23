import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes = [];

  constructor() {
    if (localStorage.getItem('recipe')) {
      this.recipes = JSON.parse(localStorage.getItem('recipe'));
    }
  }

  addRecipe(e) {
    const obj = {...e};
    this.recipes.push(obj);
    this.updateLocalStorage(this.recipes);
  }

  getRecipeById(id) {
    return this.recipes.find(el => el.id === id);
  }

  updateLocalStorage(e) {
    const arr = [...e];
    localStorage.setItem('recipe', JSON.stringify(arr));
    console.log(JSON.parse(localStorage.getItem('recipe')));
  }
}
