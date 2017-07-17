import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge){
    var output: Animal[] = [];
    if(desiredAge === "incompleteAnimals") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].added === false) {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desiredAge === "completedAnimals") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].added === true) {
         output.push(input[i]);
       }
     }
     return output;
   } else {
     return input;
   }
 }
}
