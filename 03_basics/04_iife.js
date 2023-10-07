//  Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // naed iife
    console.log(`DB Connected`)   ;
}) () ;

// ()()  first braces is used to wrap function and second for call

// iife is used to protect if from global pollution 

( (name) => {
    //simple iife
    console.log(`db connected two , ${name}`)
})(`mongodb`);

//we have to put put semicolon at the end to tell the function where to stop