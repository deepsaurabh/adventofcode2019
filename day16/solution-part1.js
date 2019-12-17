function calculateFFT(inp,itr){
    console.log(123)
		inp = inp.split('');
        function getMultiplierArray(pattern,inp,n){
            var mul = [];
               patternKey = 0;
            for(var k =1;k<=inp.length +1;k++){
               for(var l = 1; l <=n; l++ ){
                    mul.push(pattern[patternKey]);
                }
                if(patternKey < pattern.length -1){
                        patternKey ++;
                    }else{
                        patternKey = 0;
                 }
                 if(mul.length >= inp.length +1){
                        break;
                  }
            }
            mul.shift();
            return mul.slice(0,inp.length);
        }
        var pattern = [0,1,0,-1];
        var output = [];
        // Iteration for new result
        for(var i = 0;i<itr;i++){
            //iteration for element of output
            for(var j = 1;j<= inp.length;j++){
                var multiplier = getMultiplierArray(pattern,inp,j);
				var sum = 0;
				for(var k = 0;k<multiplier.length;k++){
					 var num = inp[k] * multiplier[k];
					 sum +=num;
				}
				sum = Math.abs(sum);
                sum = sum % 10;
				output.push(sum);
            }
			inp = JSON.parse(JSON.stringify(output));
			if(i == itr -1){
				return output.slice(0,8).join('');
			}
			output = [];
        }
		
}
