import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li [class]="priorityAge(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">
    {{currentAnimal.name}} <br />
    {{currentAnimal.age}}
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
  </ul>
  `
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  isAdded(clickedAnimal: Animal) {
    if(clickedAnimal.added === true) {
      alert("You Added an animal!");
    } else {
      alert("You did not add animal");
    }
  }

  priorityAge(currentAnimal){
    if (currentAnimal.age === 3){
      return "bg-danger";
    } else if (currentAnimal.age === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }


}
