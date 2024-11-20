//variables
//The 3 main keywords -> var, let, const

// function example(){
//     console.log(a);// undefined 
//     var a = 10;
//     console.log(a);
// }
// example()



//let keyword for declaring variables

// function example(){
//     // console.log(a); // reference error
//     let a = 10;
//     console.log(a);
// }

// example()


// const keyword
// const x = 10;
// x = 20;
// // console.log(x)

// const arr = [1, 2, 3]
// arr.push(4)// allowed to do that because you 
// console.log(arr) // 1 2 3 4


// arr = [4, 5] //not allowed


// 3 main operations
//1. mapping
//2. filter
//3. reducing

//Mapping
// const numbers = [1, 2, 3, 4]; // create another array 2,4,6,8
// const doubled_array = numbers.map(num => num * 2);
// console.log(doubled_array)


// const numbers = [1, 2, 3, 4]; // create another array 2,4,6,8
// const add10toeach =  numbers.map(num => num + 10);
// console.log(add10toeach)


//Filtering
// const numbers = [1, 2, 3, 4];
// const Filtered_such_that_greater_than_2 = numbers.filter(num => num > 2);
// console.log(Filtered_such_that_greater_than_2);


//Reduce
//what ff we wanted a function that would get us all the elements in an array added together
// [1,2,3,4]// o/p = 10 (1+2+3+4)

// array.reduce((accumulator, currentValue, currentIndex, array)=>{
//     //your logic
// }, initialValue)


// const numbers = [1, 2, 3, 4];
// const Sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)
// console.log(Sum)



//closure

const createAdder = (x) =>{
    return (y) => x+y;
}// closure over x
const add3 = createAdder(3)

let y = add3(5) // y = 5+3
console.log(y)





