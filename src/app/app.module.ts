import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuardService} from './services/auth-guard.service';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RecipeComponent,
    NotFoundComponent,
    AddRecipeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
