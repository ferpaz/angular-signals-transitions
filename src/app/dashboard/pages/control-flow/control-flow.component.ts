import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Qwik', 'Svelte']);
  public frameworks2 = signal<string[]>([]);

  public toggleContent() {
    this.showContent.update( value => !value);
  }

  public changeGrade(newGrade: string) {
    this.grade.update( value => newGrade as Grade);
  }

}
