module.exports = {

findMinMax: function (arr){  //This is th function findMinMax
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var result = [];
    if(min !== max){
        result.push(min);
        result.push(max);
    }else if(min === max){
     result.push(min);
     }
        return result
},

fizzBuzz: function(n){  //This is th function fizzBuzz
	if(n % 3 === 0 && n % 5 === 0){
		return ("FizzBuzz");
	}
	else{ 
	  if (n % 3 === 0 && n % 5 !== 0){
	  return ("Fizz");
	  }
	else{
	  if (n % 3 !== 0 && n % 5 === 0){
	   return ("Buzz");
	  }
	  else{
	    if (n % 3 !== 0 && n % 5 !== 0){
	      return (n);
	    }
	  }
	}
}
},

aritGeo: function(arr){   //This is th function aritGeo
    var first_term = arr[0];
    var second_term = arr[1];
    var comdif = arr[1] - arr[0];
    var comrat = arr[1] / arr[0];
    if(arr.length !== 0){
    for(var i = 2; i <= arr.length; i++){
        if(arr[i] - arr[i-1] === comdif){
          return("Arithmetic");
  } else if(arr[i] / arr[i-1] === comrat){
    return ("Geometric");
  } else if(arr[i] - arr[i-1] !== comdif && arr[i] / arr[i-1] !== comrat){
    return -1;
  }
}
}else{
return 0;
  }
}
}