import { Routes } from '@angular/router';
import { RecipeItemPageComponent } from './pages/recipe-item-page/recipe-item-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BreakfastRecipesPageComponent } from './pages/breakfast-recipes-page/breakfast-recipes-page.component';
import { LunchRecipesPageComponent } from './pages/lunch-recipes-page/lunch-recipes-page.component';
import { DinnerRecipesPageComponent } from './pages/dinner-recipes-page/dinner-recipes-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'breakfast/all', pathMatch: 'full'},
  {path: 'recipe/:id', component: RecipeItemPageComponent},
  {path: 'breakfast/:difficulty', component: BreakfastRecipesPageComponent},
  {path: 'lunch/:difficulty', component: LunchRecipesPageComponent},
  {path: 'dinner/:difficulty', component: DinnerRecipesPageComponent},
  {path: '**', component: NotFoundPageComponent}
];
