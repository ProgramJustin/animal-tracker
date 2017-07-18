import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="row">
    <div class="col-md-12">
      <div class="col-md-4">
        <label>species</label><br />
        <input type="text" #newSpecies><br />
        <label>name</label><br />
        <input type="text" #newName><br />
        <label>age</label><br />
        <input type="text" #newAge><br />
      </div>
      <div class="col-md-4">
      <label>diet</label><br />
        <input type="text" #newDiet><br />
        <label>location</label><br />
        <input type="text" #newLocation><br />
        <label>caretakers</label><br />
        <input type="text" #newCaretakers><br />
      </div>
      <div class="col-md-4">
        <label>sex</label><br />
        <input type="text" #newSex><br />
        <label>likes</label><br />
        <input type="text" #newLikes><br />
        <label>dislikes</label><br />
        <input type="text" #newDislikes><br />
      </div>
        <button class="bg-info" (click)="submitForm(newSpecies.value, newName.value); newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakes.value=''; newCaretakes.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
    </div>
  </div>

  `
})

export class NewAnimalComponent {

  @Output() newAnimalSender = new EventEmitter();

 submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
   var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
   this.newAnimalSender.emit(newAnimalToAdd);
 }

}
