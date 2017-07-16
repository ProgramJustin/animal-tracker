import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>hi</h1>

  <div class="well" *ngIf="selectedAnimal">
    <h3>{{selectedAnimal.name}}</h3>
    <h5>{{selectedAnimal.species}}</h5>
    <p>Animal Complete? {{selectedAnimal.added}}</p>
    <h3>Edit Animal</h3>

    <animal-list></animal-list>
    <label>Enter Animal name:</label>
    <input [(ngModel)]="selectedAnimal.name">
    <label>Enter Animal Priority (1-3):</label>
    <br>

    <button (click)="finishedAdding()">Done</button>
    </div>
  </div>

  `
})

export class AppComponent {
  selectedAnimal: null;

  masterAnimalList: Animal[] = [
    new Animal('Giraffe', 'Jeffrey', 1, 'leaves and bananas', 'Africa', 4, 'male', 'apples', 'loud noises'),
    new Animal('Snake', 'Kai', 1, 'Rats', 'India', 4, 'female', 'lounging', 'cold weather'),
    new Animal('Reptile', 'Zilla', 2, 'fruits and veggies', 'Mexico', 4, 'male', 'Back Rubs', 'Iceburg Lettuce')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedAdding() {
    this.selectedAnimal = null;
  }

}
