//set up a prime number function
function primeNumberGen(param){
    if(param === 1){
      return false;
    }
    if(param === 2){
      return true;
    }
    if(param % 2 === 0){
      return false;
    }
    var ceil = Math.ceil(Math.sqrt(param));
    for(var i = 3; i <= ceil; i += 2){
      if(param % i === 0){
        return false;
      }
    }
    return true;
  }
  
  //test if primeNumberGen works
  console.log(primeNumberGen(17));
  console.log(primeNumberGen(18));
  
  //function to loop to count primes
  function sumPrimes(param){
    //array to collect data
    var array = [];
    //start the loop
    for(var j = 2; j <= param; j++){
      //identify primes and push to array
      if(primeNumberGen(j)){
        array.push(j);
      }
    }
    //function to sum array
    var sumArray = array.reduce(function add(a,b){
      return a + b;
    }, 0);
    //function to return answer
    var answer = function(){
      return sumArray;
    }
    //return answer
    return answer();
  }
  
  //return final answer with function
  var answer = function(param){
    return sumPrimes(param);
  }
  
  //test if it works
  console.log(answer(10)); //test example should be 17
  console.log(answer(2000000)); //final answer should be 142913828922