import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>hi</h1>
    <ul>
      <li [class]="priorityAge(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.name}} <br />
      <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
    </ul>
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
  </div>

  `
})
export class AppComponent {
  added: boolean = false;
  animals: Animal[] = [
    new Animal('Giraffe', 'Jeffrey', 1, 'leaves and bananas', 'Africa', 4, 'male', 'apples', 'loud noises'),
    new Animal('Snake', 'Kai', 1, 'Rats', 'India', 4, 'female', 'lounging', 'cold weather'),
    new Animal('Reptile', 'Zilla', 2, 'fruits and veggies', 'Mexico', 4, 'male', 'Back Rubs', 'Iceburg Lettuce')
  ];
  selectedAnimal: null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
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

  isAdded(clickedAnimal: AppComponent) {
    if(clickedAnimal.added === true) {
      alert("You Added an animal!");
    } else {
      alert("You did not add animal");
    }
  }
  finishedAdding() {
    this.selectedAnimal = null;
  }


}


export class Animal {

  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {}


}
