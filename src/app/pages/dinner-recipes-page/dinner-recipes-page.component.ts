import { Component, OnInit, inject } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { SidebarSelectorComponent } from '../../components/sidebar-selector/sidebar-selector.component';
import { HeaderSelectorComponent } from '../../components/header-selector/header-selector.component';
import { ActivatedRoute } from '@angular/router';
import { RecepiesListService } from '../../services/recepies-list.service';

@Component({
  selector: 'app-dinner-recipes-page',
  standalone: true,
  imports: [RecipeCardComponent, SidebarSelectorComponent, HeaderSelectorComponent],
  templateUrl: './dinner-recipes-page.component.html',
  styleUrl: './dinner-recipes-page.component.css'
})
export class DinnerRecipesPageComponent implements OnInit {
  constructor(private routes: ActivatedRoute) {}

  public recipesListService = inject(RecepiesListService);
  public capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ngOnInit(): void {
    this.routes.params.subscribe(params => {
      this.recipesListService.currentCategory = 2;
      this.recipesListService.currentDifficulty = this.recipesListService.difficulties.indexOf(this.capitalizeFirstLetter(params['difficulty']));
    });
  }
}
