import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>hi</h1>
  <ul>
       <li *ngFor="let currentAnimal of animals">{{currentAnimal.description}}</li>
     </ul>

  `
})
export class AppComponent {
  added: boolean = false;
  animals: Animal[] = [
    new Animal('Giraffe', 'Jeffrey', 1, 'leaves and bananas', 'Africa', 4, 'male', 'apples', 'loud noises'),
    new Animal('Snake', 'Kai', 1, 'Rats', 'India', 4, 'female', 'lounging', 'cold weather'),
    new Animal('Reptile', 'Zilla', 2, 'fruits and veggies', 'Mexico', 4, 'male', 'Back Rubs', 'Iceburg Lettuce')
  ];

}


export class Animal {

  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {}


}
