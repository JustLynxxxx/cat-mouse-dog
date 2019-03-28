function Cat(name, gender){
    this.name = name;
    this.gender = gender;
    this.stomach = [];
}

Cat.prototype.eat = function (mouse){
    this.stomach.push(mouse);
}

Cat.prototype.say = function (){
    console.log("meow meow");
}
module.exports = Cat;

