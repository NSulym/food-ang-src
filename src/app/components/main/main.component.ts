import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  allRecipe = [];
  categories = [
    'Перше',
    'Страви із свинини',
    'Страви з курки',
    'Гарніри',
    'Десерти',
    'Напої'
  ];
  selected = [];
  allRecipeFilter = [];

  constructor(private router: Router, private recipeSer: RecipeService) {
  }

  ngOnInit() {
    this.allRecipe = this.recipeSer.recipes;
    this.allRecipeFilter = this.allRecipe;
  }

  onRecipe(id) {
    const url = '/recipe/' + id;
    this.router.navigate([url]);
  }

  deleteRecipe(i) {
    this.allRecipe.splice(i, 1);
    this.recipeSer.updateLocalStorage(this.allRecipe);
  }

  chooseCategory(e) {
    if (this.selected.indexOf(e) === -1) {
      this.selected.push(e);
    } else {
      this.selected.splice(this.selected.indexOf(e), 1);
    }
    this.allRecipeFilter = [];
    this.selected.forEach((elem) => {
      this.allRecipe.forEach((recipe) => {
        if (recipe.categories.indexOf(elem) !== -1) {
          if (!this.allRecipeFilter.find(el => el.id === recipe.id)) {
            this.allRecipeFilter.push(recipe);
          }
        }
      });
    });
    if (this.selected.length === 0) {
      this.allRecipeFilter = this.allRecipe;
    }
  }
}
