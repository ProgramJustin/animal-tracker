import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

  <input type="text" #newSpecies>
  <input type="text" #newName>
  <input type="text" #newAge>
  <input type="text" #newDiet>
  <input type="text" #newLocation>
  <input type="text" #newCaretakers>
  <input type="text" #newSex>
  <input type="text" #newLikes>
  <input type="text" #newDislikes>

  <button (click)="submitForm(newSpecies.value, newName.value); newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakes.value=''; newCaretakes.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>

  `
})

export class NewAnimalComponent {

  @Output() newAnimalSender = new EventEmitter();

 submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
   var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
   this.newAnimalSender.emit(newAnimalToAdd);
 }

}
