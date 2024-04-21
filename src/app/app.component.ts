import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecepiesListService } from './services/recepies-list.service';
import { HeaderSelectorComponent } from './components/header-selector/header-selector.component';
import { SidebarSelectorComponent } from './components/sidebar-selector/sidebar-selector.component';
import { OtherRecipesListComponent } from './components/other-recipes-list/other-recipes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderSelectorComponent, SidebarSelectorComponent, OtherRecipesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private recipesListService: RecepiesListService) {}
  title = 'myapp';

  ngOnInit(): void {
    this.recipesListService.fetchRecipesList();
  }
}
