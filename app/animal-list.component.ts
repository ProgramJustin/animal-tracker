import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All </option>
      <option value="completedAnimals">younger</option>
      <option value="incompleteAnimals" selected="selected">not older</option>
    </select>

    <div>
    <ul>
      <li (click)="isAdded(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.name}} {{currentAnimal.age}}
        <input *ngIf="currentAnimal.added === true" type="checkbox" checked (click)="toggleDone(currentAnimal, false)"/>
        <input *ngIf="currentAnimal.added === false" type="checkbox" (click)="toggleDone(currentAnimal, true)"/>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
    </div>
  `
})

export class AnimalListComponent {
  filterByAge: string = "incompleteAnimal;";

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

  priorityAge(currentAnimal)
  {
    if (currentAnimal.age === 3){
      return "bg-danger";
    } else if (currentAnimal.age === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
}


}
