import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    ingredients: [],
    categories: []
  };
  showPrev = false;
  categories = [
    'Перше',
    'Страви із свинини',
    'Страви з курки',
    'Гарніри',
    'Десерти',
    'Напої'
  ];

  constructor(private recipeSer: RecipeService) {

  }

  ngOnInit() {
    this.appRecipeForm = new FormGroup({
      nameRecipe: new FormControl(null),
      ingredient: new FormControl(null),
      ingredientValue: new FormControl(null),
      description: new FormControl(null),
      checkBox: new FormControl(null),
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
      const ingObj = {
        name: this.appRecipeForm.controls.ingredient.value,
        value: this.appRecipeForm.controls.ingredientValue.value
      };
      this.previewRecipe.ingredients.push(ingObj);
      console.log(this.appRecipeForm);
    }
    this.appRecipeForm.controls.ingredient.setValue('');
    this.appRecipeForm.controls.ingredientValue.setValue('');
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

  onShowPrev() {
    this.showPrev = true;
  }

  onSelectCategory(categ) {
    if (this.previewRecipe.categories.indexOf(categ) === -1) {
      this.previewRecipe.categories.push(categ);
    } else {
      this.previewRecipe.categories.splice(this.previewRecipe.categories.indexOf(categ), 1);
    }
    console.log(this.previewRecipe.categories);
  }
}
