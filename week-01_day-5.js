// Question 1:
// Input = Number
// Output = Number

var number = 7;
var square = number * number;

console.log(square) //49

// Question 2:
// Input = Time/ String
// Output = String

var time = '18:01'

if(time >= '06:00' && time <= '12:00' ){
  console.log("Breakfast")
} else if (time > '12:00' && time <= '16:00' ){
  console.log("Lunch")
} else if (time > '16:00' && time <= '20:00' ){
  console.log("Dinner")
} else {
  console.log("Sleep")
}


// Question 3:
// Input = Number
// Output = String

var number = 10; //1 => number

if( number % 2 === 0){
  console.log("Even")
} else {
  console.log("Odd")
}

// === => Data type & value
// == =>


// Question 4:
// Input = String
// Output = Numbers

var name = "shubham"
var vowel_list ='aeiou'; // -1
var vowel = 0;
var cons = 0;

for(var i = 0; i<name.length; i++){
  if(vowel_list.indexOf(name[i]) !== -1){
    vowel++
  } else {
    cons++
  }
}

console.log("Vowel here" ,vowel)
console.log("Cons here" ,cons)


// Question 5: 
// Input = Number
// Output = Number

var number = 2;

for(var i = 1; i<=10; i++ ){
  console.log( number + " * " + i + " = " + i*number)
}