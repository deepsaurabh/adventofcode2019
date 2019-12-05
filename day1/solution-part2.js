// X will be the array of inputs
function CalculateMass(x){
 var f = [];
 for(var i in x){
	var mass = x[i];
	var flag = true;
	var sum = 0;
	while(flag){
		 mass = getMass(mass);
		 if(mass < 0){
			flag = false;
		}else{
			sum = sum+ mass;
		}
	}
	
 f.push(sum)
}
return eval(f.join('+'));
}

function getMass(n){
    return Math.trunc(n/3) -2;
}
