import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  public menuItems = routes
  .map( route => route.children ?? [] )
  .flat()
  .filter( route => route && route.path )
  .filter( route => !route.path?.includes(':') );

  constructor() {
  }
}
