// With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. Example: 283 K converts to 10 °C which converts to 50 °F. The forecast today is 293 Kelvin.

// I created a variable using "const" which makes it remain constant.
const Kelvin = 293;

// I converted Kelvins into Celsius by subtracting 273.
var Celsius = 293 - 273;

// This calculates Fahrenheit using the equation below.
var Fahrenheit = Celsius * (9/5) + 32;

// This is going to round the number down to a whole number.
Math.floor(Fahrenheit);

console.log(`The temperature is ${Fahrenheit} degrees fahrenheit.`);


// Extra practice: Convert Celsius to the Newton Scale. Equation: Newton = Celsius * (33/100)

// var Newton = Celsius * (33/100); 

// Math.floor(Newton);

// console.log(`The degrees of heat is ${Newton} degrees Newton.`);
