class Animal {
  added: boolean = false;


  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {}

  isAdded(){
    this.added = true;
  }

}
var animals: Animal[] = [];
animals.push(new Animal('Giraffe', 'Jeffrey', 1, 'leaves and bananas', 'Africa', 4, 'male', 'apples', 'loud noises'));
animals.push(new Animal('Snake', 'Kai', 1, 'Rats', 'India', 4, 'female', 'lounging', 'cold weather'));
animals.push(new Animal('Reptile', 'Zilla', 2, 'fruits and veggies', 'Mexico', 4, 'male', 'Back Rubs', 'Iceburg Lettuce'));

for(var animal of animals){
  console.log(animal);
}
console.log(animals);
