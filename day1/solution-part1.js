// X will be the array of inputs
function CalculateMass(x){
 var y = [];
 for(var i in x){
	var div = Math.trunc(x[i]/3) -2;
	y.push(div)
  }
 return eval(y.join('+'));
}
