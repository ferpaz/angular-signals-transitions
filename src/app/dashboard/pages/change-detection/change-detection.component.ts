import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()"></app-title>

    <h2>Framework As Signal</h2>
    <pre>{{ frameworkAsSignal() | json }}</pre>

    <h2>Framework As Property</h2>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,

  // Se define la estrategia de detección de cambios porque Angular 18 está abandonando
  // la detección de cambios por defecto implementada con Zone.Js
  // En el futuro puede ser que este sea el valor por defecto
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
    version: '2.0'
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
    version: '2.0'
  };

  public currentFramework = computed(() => `Change Detection - ${this.frameworkAsSignal().name}`);

  constructor() {
    setInterval(() => {
      // Supuestamente esto no deberia funcionar, porque el cambio no se está detectando
      // debido a la estrategia configurada en el Componente, sin embargo en Angular 18
      // si lo está recibiendo, ¿será que en 17 no y en 18 hicieron algo para si lo soporte?
      this.frameworkAsProperty.name = 'React';

      // El cambio de la propiedad se refleja en la vista
      // solamente cuando el Signal se actualiza y no estar pendiente
      // de todos los cambios en cualquier lugar
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }))

      console.log('ChangeDetectionComponent#frameworkAsSignal');
    }, 3000);
  }
}
