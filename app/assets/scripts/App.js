function person(fullname, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is" + this.name + " and my favorite color is" + this.favColor)
    }
}

var johnName = "John Doe";
var johnFavColor = "blue";

person("johnName", 'JohnFavColor');