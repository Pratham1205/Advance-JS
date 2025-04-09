// // function someFunction(param1, ...param2){
// //     console.log(param1,param2);
    
// // }
// // someFunction("hello","bro","how are you");
// // function addTwoNumber(a,b){
// //     console.log(a+b);
// // }
// // let result = addTwoNumber(4,5);
// // console.log(result);

// let addTwoNumber = (a,b) => a+b;
// // let result = addTwoNumber(4,5);
// // console.log(result);

// let resultArr = [];
// for(let i=0;i<10;i++){
//     let result = addTwoNumber(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);



//                                         Variable scope in functions



// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("Hi!");
// console.log("Not available here:",x);



// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here", y);
//     return y;
// }
// let z = testAvailability();
// console.log("Outside the function",z);
// console.log("Not availbale here",y);



// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x = "local";
//     }
// }
// doingStuff();



// function doingStuff(){
//     if(true){
//         const x = "local";
//     }
//     console.log(x);
// }
// doingStuff();



// let globalVar = "I'm a global variable";
// function testAvailability(x) {
//     console.log("Access to global variable inside function -:", globalVar);
// }
// testAvailability("Some parameter");
// console.log("still available",globalVar);



// let x = "global";
// function doingStuff(){
//     let x = "local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);



// let x = "global";
// function doingStuff(x) {
//     console.log(x);
// }
// doingStuff("param");



// function confusereader(){
//     x = "guess my scope";
//     console.log("inside the funciton",x);
// }
// confusereader();
// console.log("outside the function",x);



// (function(){
//     console.log("I'm an IIFE");     // Immediately Invoked Function Expression
// })();



// (()=>{
//     console.log("I'm an IIFE");     // Same as above
// })();



//                                       Recursion

// function factorial(n){
//     if(n===1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// console.log(factorial(5));



// function factorial(n){
//     if(n > 0){
//         console.log(n);
//         factorial(--n);
//     }
// }
// factorial(5);



// function factorial(n){
//     console.log("Started function",n);
//     if(n > 0){
//         factorial(n-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("Ended fucntion",n);
// }
// factorial(5);



