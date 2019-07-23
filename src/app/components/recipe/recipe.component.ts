import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipeId: string;
  oneRecipe: any;

  constructor(private route: ActivatedRoute, private  resSer: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      this.recipeId = param.id;
    });
    this.oneRecipe = this.resSer.getRecipeById(+this.recipeId);
    console.log(this.recipeId);
    console.log(this.oneRecipe);
  }
}
