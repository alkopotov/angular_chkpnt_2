import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { RecepiesListService } from '../../services/recepies-list.service';

@Component({
  selector: 'app-sidebar-selector',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-selector.component.html',
  styleUrl: './sidebar-selector.component.css'
})
export class SidebarSelectorComponent {
  constructor(public routes: ActivatedRoute) {}

  public recipesListService = inject(RecepiesListService);

}
