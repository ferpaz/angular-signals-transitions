import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['h-[600px] w-full', cssClass]">
      <h1 class="text-4xl font-bold text-center align-middle">Heavy Loaders Slow</h1>
      <p class="text-center">This component takes 3 seconds to load</p>
    </section>
  `,
  styles: ``
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;

    constructor() {
      const start= Date.now();
      while (Date.now() - start < 3000) {}

      console.log('FINALIZO  - HeavyLoadersSlowComponent');
    }

}
