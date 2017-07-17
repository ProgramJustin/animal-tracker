import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `

  <div class="well" *ngIf="selectedAnimal">
  <h3>{{selectedAnimal.name}}</h3>
  <h5>{{selectedAnimal.species}}</h5>
  <p>Animal Complete? {{selectedAnimal.added}}</p>
  <h3>Edit Animal</h3>

  <label>Enter Animal name:</label>
  <input [(ngModel)]="selectedAnimal.name">
  <label>Enter Animal Priority (1-3):</label>
  <br>

  <button (click)="finishedAdding()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickSender = new EventEmitter();
}
