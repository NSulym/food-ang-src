import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  appRecipeForm: FormGroup;
  desc: string;
  previewRecipe = {
    id: +new Date(),
    name: '',
    logo: '',
    description: '',
    ingredients: []
  };

  constructor(private recipeSer: RecipeService) {

  }

  ngOnInit() {
    this.appRecipeForm = new FormGroup({
      nameRecipe: new FormControl(null),
      ingredient: new FormControl(null),
      description: new FormControl(null),
      logo: new FormControl(null)
    });
  }

  onSubmit() {
    this.previewRecipe.description = this.desc;
    this.previewRecipe.name = this.appRecipeForm.controls.nameRecipe.value;
    this.recipeSer.addRecipe(this.previewRecipe);
    this.clearForm();
  }

  addIng() {
    if (this.appRecipeForm.controls.ingredient.value !== '') {
      this.previewRecipe.ingredients.push(this.appRecipeForm.controls.ingredient.value);
      console.log(this.appRecipeForm);
    }
    this.appRecipeForm.controls.ingredient.setValue('');
  }

  onFileChanged(files) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.previewRecipe.logo = reader.result as string;
    };
  }

  clearForm() {
    this.appRecipeForm.reset();
    this.previewRecipe.logo = '';
    this.previewRecipe.ingredients = [];
  }

  deleteIng(i) {
    this.previewRecipe.ingredients.splice(i, 1);
  }
}
