function Mouse(name, gender){
    this.name = name;
    this.gender = gender;
    this.dead = false;
}

Mouse.prototype.die = function () {
    this.dead = true;
}

module.exports = Mouse;