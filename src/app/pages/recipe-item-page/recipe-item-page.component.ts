import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { RecepiesListService } from '../../services/recepies-list.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-recipe-item-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-item-page.component.html',
  styleUrl: './recipe-item-page.component.css'
})
export class RecipeItemPageComponent implements OnInit {

  constructor(public routes: ActivatedRoute) {
    this.routes.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  public recipesListService = inject(RecepiesListService);

  public recipe: any = {};


  private _location: Location = inject(Location);

  public back(): void {
    this._location.back();
  }

  
  ngOnInit(): void {       
    
    if (this.recipesListService.otherRecipesList.length === 0) {
      this.recipesListService.fetchRecipesList();
    }
    this.recipesListService.getRecipeById(this.routes.snapshot.params['id']);
    this.recipe = this.recipesListService.recipeItem;
  }
}
