//promise is an object that represents a competion or failure of an asynchronous operation
//pending
//fulfilled
//rejected
// let promise = new Promise((resolve,reject)=>{
//     if(true){
//        resolve("promise fulfilled");

//     }
//     else{
//         reject("promise rejected")
//     }

// });
// console.log(promise);
// promise.catch(()=>console.log("promise failed"))
// console.log(promise);

// promise.then((result)=>console.log("success"))
// //new key word is used to create an instance of constructor of a class



// //destructuring
// let a = [2,4,7]
// let [one, four ,seven, ...others]= [2,4,7,8,9,10]
// console.log({one});
// console.log({four});
// console.log({seven});
// console.log({others});

// let fruit = {
//     name: "mango",
//     color: "green",
//     size: "small",
// };
// let {name,color,size} = fruits;
// console.log(name);
// console.log(color);


//how async works
let mother = "beautiful";
console.log(mother);

let promise = new Promise((resolve,reject)=>{
         
      setTimeout(()=> resolve("promise fulfilled"),5000)
      ;


})
async function student(){
    let person = await promise;
    console.log(person);
    console.log("await is only used in async function ");
}

student();

let num = 34;
console.log(num + 2);

let greeting = "hello";
console.log(greeting);

