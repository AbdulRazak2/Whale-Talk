const input = 'amalitech, Alhassan Abdul-Razak is my name';
const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let i = 0; i < input.length; i++){

  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
  
    if (input[i] === vowels[vowelIndex]) {
     
      if (input[i] === 'e' || vowels[vowelIndex] === 'u') {
        resultArray.push(input[i],input[i])
      } else {
        resultArray.push(input[i])
      }
    }
  } 
}
console.log(resultArray.join('').toUpperCase())

console.log('UUEEIEEAUUEE')