var Animal = (function () {
    function Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.location = location;
        this.caretakers = caretakers;
        this.sex = sex;
        this.likes = likes;
        this.dislikes = dislikes;
        this.added = false;
    }
    return Animal;
}());
var animals = [];
animals.push(new Animal('Giraffe', 'Jeffrey', 1, 'leaves and bananas', 'Africa', 4, 'male', 'apples', 'The Rain'));
console.log(animals);
