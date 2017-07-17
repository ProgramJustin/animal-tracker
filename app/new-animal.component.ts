import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <select #newAge>
  <option [value]="1"> Younger Than 2 </option>
  <option [value]="2"> 2 Years Old </option>
  <option [value]="3"> Adults </option>
  </select>
  <button (click)="submitForm(newAge.value)">Add</button>

  `
})

export class NewAnimalComponent {

  @Output() newAnimalSender = new EventEmitter();

 submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
   var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
   this.newAnimalSender.emit(newAnimalToAdd);
 }

}
