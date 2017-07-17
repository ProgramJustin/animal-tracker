import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickSender)="finishedAdding()"></edit-animal>

  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

  </div>
  `
})

export class AppComponent {
  selectedAnimal: null;

  masterAnimalList: Animal[] = [
    new Animal('Giraffe', 'Jeffrey', 1, 'leaves and bananas', 'Africa', 4, 'male', 'apples', 'loud noises'),
    new Animal('Snake', 'Kai', 1, 'Rats', 'India', 4, 'female', 'lounging', 'cold weather'),
    new Animal('Reptile', 'Zilla', 2, 'fruits and veggies', 'Mexico', 4, 'male', 'Back Rubs', 'Iceburg Lettuce'),
  ];
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedAdding() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
    console.log('masterAnimalList');
  }

}
