import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `

  <div class="well" *ngIf="childSelectedAnimal">
  <h3>{{childSelectedAnimal.name}}</h3>
  <h5>{{childSelectedAnimal.species}}</h5>
  <p>Animal Complete? {{childSelectedAnimal.added}}</p>
  <h3>Edit Animal</h3>

  <label>Enter Animal name:</label>
  <input [(ngModel)]="childSelectedAnimal.name">
  <label>Enter Animal name:</label>
  <input [(ngModel)]="childSelectedAnimal.age">
  <br />

  <button (click)="doneButtonClicked()">Done</button>
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
