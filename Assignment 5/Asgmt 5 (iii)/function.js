//  Write a function named calculateGrade 

function calculateGrade (score){
    if (score >= 90 && score <=100) {
        return 'A';
    }  else if (score >= 80 && score <=89){
        return 'B';
    } else if (score >= 70 && score <=79){
        return 'C';
    } else if (score >= 60 && score <=69){
        return 'D';
    } else if (score < 60){
        return 'F';
    }
} 
 
 
const studentScore = 77;
const studentGrade = calculateGrade (studentScore);

console.log(`student score: ${studentScore}`);
console.log(`student grade: ${studentGrade}`);



// Write a function named fahrenheitToCelsius that takes a temperaturein Fahrenheit as input and returns the equivalent temperature in celsius

// The fahrenheit to celcius formula
//       °C = (°F - 32) * 5/9

function fahrenheitToCelsius (fahrenheit){
    return (fahrenheit - 32) * 5/9;
  
}

let fahrenheit = 67;

let celsius = (fahrenheitToCelsius(fahrenheit))
console.log(`${fahrenheit} °F = ${celsius} °C `)






// Write a javascript function named classifyGrade

function classifyGrade (score){
    if ( score >= 90 ){
        return "A";
    }else if (score >= 80 && score <= 89){
        return "B"
    }else if (score >= 70 && score <= 79){
        return "C"
    }else if (score >= 60 && score <= 69){
        return "D"
    }else {
        return "F"
    }
}




const studentScores = "99";
const classifyStudentGrade =  classifyGrade(studentScores)


console.log(`student Score: ${studentScores}`);
console.log(`Grade: ${classifyStudentGrade}`);
























