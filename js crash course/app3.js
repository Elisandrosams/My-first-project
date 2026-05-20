//DRY - Dont Repeat Yourself

// Function definition
//function WelcomePersonToFES(firstName, lastName) {
//    console.log(`Welcome to FES, ${firstName} ${lastName}`)
//}

// Call the function
//WelcomePersonToFES('Elisandro', 'Sams');


//celsius to farenheit conversion function
//function convertCelsiusToFarenheit(celsius) {
//    return celsius * 1.8 + 32 
//}

//define a function with cont and =>
const convertCelsiusToFarenheit = (celsius) => {
    return celsius * 1.8 + 32
}
console.log(convertCelsiusToFarenheit(10))