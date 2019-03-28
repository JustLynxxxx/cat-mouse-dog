import Dog from "./Dog";
import Cat from "./Cat";
import Mouse from "./Mouse";

var dog =  new Dog("Tommy");
var cat = new Cat("Tom", "male");
var mouse = new Mouse("Jerry", "female");
var evan = new Cat("Evan", "male");
var dr = new Mouse("Dr", "male");

dog.bark();
cat.eat(mouse);
dog.eat(cat);
dog.eat(evan);
cat.eat(dr);
evan.say();
