  function dubleIt(num){
      return num * 2;
  }
  
  
//   function dubleIt = function myFun(num){
//         return num * 2;
//     }
//const + variable name   =  (parameter) => parameter *2;
const dobleIt = num => num * 2;
//const + variable name   =  parameter(x,y) => parameter 
const add = (x,y)=> x + y;
//
const give5 = () => 5;

const doMath = (x,y) =>{
    const sum = x +y ;
    const diff = x-y;
    const result = sum * diff;
    return result;
}


const result = add(50,70);
const result2 = give5();
const result3 = doMath(7,5);
console.log(result3);