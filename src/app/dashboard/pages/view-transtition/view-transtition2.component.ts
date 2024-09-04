import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2"></app-title>

    <section class="flex justify-end">
      <img
        src="https://picsum.photos/id/237/200/300"
        alt="Picsum Logo"
        width="200"
        height="200"
        style="view-transition-name: hero1"
      />

      <div
        class="fixed bottom-16 right-4 bg-blue-500 w-56 h-56 rounded"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTranstition2Component {

}
