import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1"></app-title>

    <section class="flex justify-start">
      <img
        src="https://picsum.photos/id/237/200/300"
        alt="Picsum Logo"
        width="200"
        height="200"
        style="view-transition-name: hero1"
      />

      <div
        class="bg-blue-500 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTranstition1Component {

}
