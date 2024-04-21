import { Component, inject } from '@angular/core';
import { RecepiesListService } from '../../services/recepies-list.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-selector',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-selector.component.html',
  styleUrl: './header-selector.component.css'
})
export class HeaderSelectorComponent {
  constructor( public routes: ActivatedRoute){}
  public recipesListService = inject(RecepiesListService);
}
