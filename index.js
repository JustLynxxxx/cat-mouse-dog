var Dog = require("./Dog");
var Cat = require("./Cat");
var Mouse = require("./Mouse")

var dog =  new Dog("Tommy");
var cat = new Cat("Tom", "male");
var mouse = new Mouse("Jerry", "female");

dog.bark();
cat.eat(mouse);