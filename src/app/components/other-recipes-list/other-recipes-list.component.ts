import { Component, DoCheck, OnInit } from '@angular/core';
import { RecepiesListService } from '../../services/recepies-list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-other-recipes-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './other-recipes-list.component.html',
  styleUrl: './other-recipes-list.component.css'
})
export class OtherRecipesListComponent implements OnInit, DoCheck {

  constructor(public recipesListService: RecepiesListService) {}
  
  public recipes: any[] = [];
  ngOnInit(): void {
    
    if (this.recipesListService.otherRecipesList.length === 0) {
      this.recipesListService.fetchRecipesList();
    }
  }


  ngDoCheck(): void {
    this.recipes = this.recipesListService.otherRecipesList;
  }
}