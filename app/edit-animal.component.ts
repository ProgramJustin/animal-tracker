import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `

    <div class="row">
    <div class="col-md-12" *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <h5>{{childSelectedAnimal.age}}</h5>
      <h3>Edit Animal</h3>

      <label>Enter Animal name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Enter Animal age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <br />

      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
