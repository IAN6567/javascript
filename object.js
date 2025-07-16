//An object iun javascriot ius astand alone entity with properties and types.
//It sia similar to rel-liffe objects,like cars which has properties like color type like sedan or suv.
//objects can also have methods ,which are functions that belong to the object

const car = {
  color: "red",
  type: "sedan",
  year: 2020,
  onsale: true,
  start: function () {
    console.log("car started");
  },
};
//anonymous function-a funtion without a name
//accessing values in an object can be done using dot notation or bracket notation.
console.log(car.log); //output red using dot notation
console.log(car["color"]); //output red using bracket notation
console.log(car.type); //output;sedan
console.log(car.onsale); //OUTPUT:TRUE
//calling a method/funtion
car.start();
