import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes = [
    {
      id: 123,
      logo: 'assets/img/test-food.png',
      name: 'test1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, harum.',
      ingredients: ['ing11', 'ing12', 'ing13']
    },
    {
      id: 234,
      logo: 'assets/img/test-food.png',
      name: 'test2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, harum.',
      ingredients: ['ing21', 'ing22', 'ing23']
    },
    {
      id: 345,
      logo: 'assets/img/test-food.png',
      name: 'test3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, harum.',
      ingredients: ['ing31', 'ing32', 'ing33']
    },
  ];

  constructor() {
  }

  addRecipe(e) {
     const obj = {...e};
     this.recipes.push(obj);
  }

  getRecipeById(id) {
    return this.recipes.find(el => el.id === id);
  }
}
