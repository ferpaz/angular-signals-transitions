import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
