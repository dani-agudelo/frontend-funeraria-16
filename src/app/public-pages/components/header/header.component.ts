import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public listRoutes = [
    { path: '', name: 'inicio' },
    { path: 'about', name: 'Quienes somos' },
    { path: 'contact', name: 'Contáctanos' },
  ];
}
