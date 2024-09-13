import { Component, input, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit {

  routePath = input.required<string>();

  public menuItems: Route[] = [];

  ngOnInit(): void {
    this.menuItems = routes
      .filter( route => route.path === this.routePath() )
      .map( route => route.children ?? [] )
      .flat()
      .filter( route => route && route.path )
      .filter( route => !route.path?.includes(':') );
  }
}
