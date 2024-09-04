import { Component } from '@angular/core';

import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html'
})
export default class DeferedViewsComponent {

}
