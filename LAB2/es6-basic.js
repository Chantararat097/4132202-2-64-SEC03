var string1 = "sit1"; //gloda1  
string2 = "sit2" // same var  

string1 = "hello"
console.log(string1);  

{
     let string1 = "my name";  
     console.log(string1);
}
console.log(string1);

{
    const string1 = "win"
    //   string1 = "vong";
}

//tradltion fn
function add(a, b) {
    let c = a + b;
    return
}

const ros = add (5, 3);
console.log(res);

//arrow function
const add = (a, b) => a + b;
res = addfn(8, 5);
console.log(res);

//array
const cars = ["toyota", "mazda" "honda"];
const frults = [];
frults[0] = "apple";
frults[3] = "mango";
const pepple = new Array("win", "james" "john");
console.log(people);
console.log(frults);

lot popCae = cars.pop();
console.log(popCar);
console.log(cars);

cars.push("Kubota");
cars.shift(); //remove "toyota"
cars.unshift("froza");
console.log(cars);

const carSlide = cars.slice(1, 3);
console.log(carSlide);

carSlide.splice(1, 0, "Honda");
console.log(carSlide);

console.log(carSlide.toString());
console.log(carSlide.concat(pepple));
console.log([...cars, ...people]); //spread opreator