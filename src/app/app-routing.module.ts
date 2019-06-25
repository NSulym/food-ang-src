import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {RecipeComponent} from './components/recipe/recipe.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AddRecipeComponent} from './components/add-recipe/add-recipe.component';

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuardService] },
  {path: 'login', component: LoginComponent},
  {path: 'recipe', canActivate: [AuthGuardService], children: [
      {path: 'add', component: AddRecipeComponent},
      {path: ':id', component: RecipeComponent}
    ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
