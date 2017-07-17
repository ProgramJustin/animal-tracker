import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <form>
  <label>Enter Animal species:</label>
  <input type="text">
  <label>Enter Animal name:</label>
  <input type="text">
  <label>Enter Animal age:</label>
  <input type="text">
  <label>Enter Animal location:</label>
  <input type="text">
  <label>Enter Animal sex:</label>
  <input type="text">
  <label>Enter Animal likes:</label>
  <input type="text">
  <label>Enter Animal dislikes:</label>
  <input type="text">
  <button (click)="submitForm()">Add</button>
  </form>

  `
})

export class NewAnimalComponent {

  @Output() newAnimalSender = new EventEmitter();

 submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
   var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
   this.newAnimalSender.emit(newAnimalToAdd);
 }

}
