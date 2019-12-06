//X is the input array
function getDiagnostic(x){
var noOfInst = 4;
var outputArr = [];
for(var i =0;i<=x.length;i=i+noOfInst){
	if(x[i] == 99){
		return outputArr[outputArr.length -1];
		break;
	}else{	var opCode = x[i];
			if(x[i] > 99){
				var mode = [];
				mode = x[i].toString().split('');
				opCode = parseInt(mode.splice(-2,2).join(''));
				mode.reverse();
				if(mode[0]){
						if(mode[0] == 0){
								var val1 = x[x[i+1]];
						}else if(mode[0] == 1){
								var val1 = x[i+1];
						}
						
				}else{
						var val1 = x[x[i+1]];
				}

				if(mode[1]){
						if(mode[1] == 0){
								var val2 = x[x[i+2]];
						}else if(mode[1] == 1){
								var val2 = x[i+2];
						}
						
				}else{
						var val2 = x[x[i+2]];
				}

				if(mode[2]){
						if(mode[2] == 0){
								var pos = x[x[i+3]];
						}else if(mode[1] == 1){
								var pos = x[i+3];
						}
						
				}else{
						var pos = x[x[i+3]];
				}	

			}else{
				var val1 = x[x[i+1]];
				var val2 = x[x[i+2]];
				var pos = x[x[i+3]]
			}
			
			if(opCode == 1){
				x[pos] = val1 + val2;
				noOfInst = 4;
			}else if(opCode == 2){
				x[pos] = val1 * val2;
				noOfInst = 4;
			}else if(opCode == 3){
				var inp = 1;
				
				x[x[i+1]] = inp;
				noOfInst = 2;
			}else if(opCode == 4){
				var output = x[x[i+1]];
				if(mode[0] == 1){
					output = x[i+1];
				}
				outputArr.push(output);
				console.log(outputArr);
				noOfInst = 2;
			}
	}
}

}
