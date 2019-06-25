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

  constructor(private router: Router, private recipeSer: RecipeService) {
  }

  ngOnInit() {
    this.allRecipe = this.recipeSer.recipes;
  }

  onRecipe(id) {
    const url = '/recipe/' + id;
    this.router.navigate([url]);
  }

  deleteRecipe(i) {
    this.allRecipe.splice(i, 1);
  }
}
