import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>hi</h1>
    <ul>
      <li [class]="priorityAge(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.species}}  {{currentAnimal.name}}</li>
      <button (click)="editAnimal()">Edit!</button>
    </ul>
  <div>

  <h3>{{selectedAnimal.likes}}</h3>
          <p>Animal Complete? {{selectedAnimal.added}}</p>
          <h3>Edit Animal</h3>
          <label>Enter Animal name:</label>
          <input [(ngModel)]="selectedAnimal.name">
          <label>Enter Animal Priority (1-3):</label>
          <br>
          <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="1">1 (Low Priority)<br>
          <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="2">2 (Medium Priority)<br>
          <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="3">3 (High Priority)
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
  selectedAnimal: Animal = this.animals[0];

  editAnimal() {
    alert("you");
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


}


export class Animal {

  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {}


}
