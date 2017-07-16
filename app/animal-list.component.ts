import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li [class]="priorityAge(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.name}} <br />
    <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  added: boolean = false;
  animals: Animal[] = [
    new Animal('Giraffe', 'Jeffrey', 1, 'leaves and bananas', 'Africa', 4, 'male', 'apples', 'loud noises'),
    new Animal('Snake', 'Kai', 1, 'Rats', 'India', 4, 'female', 'lounging', 'cold weather'),
    new Animal('Reptile', 'Zilla', 2, 'fruits and veggies', 'Mexico', 4, 'male', 'Back Rubs', 'Iceburg Lettuce')
  ];

  isAdded(clickedAnimal: AnimalListComponent) {
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
