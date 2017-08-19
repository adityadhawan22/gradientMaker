var gradientMaker = {
	outputArray : [], 
	calculateSteps : function(colorArray, factor) {
		var t1 = colorArray[0];
		var t2 = colorArray[1];
		var maxSteps = 200;
		var steps = 1;
		if(steps == 2){
			return colorArray;
		}
		else{
			for (var i = 0; i < 3; i++) {
		        t1[i]= Math.round(t1[i] + factor * (t2[i] - t1[i]));
			}
			return "rgb("+t1[0]+','+t1[1]+','+t1[2]+')';
		}


	},

	make: function(obj){
		console.log(obj);
		var stepFactor = 1 / (obj.steps - 1);

		for(var i = 0; i < obj.steps; i++) {
			this.outputArray.push(this.calculateSteps(obj.colorArray, stepFactor * i));
		}
		return this.outputArray;

	}

};

var colors = gradientMaker.make({
	colorArray:[[94, 79, 162], [247, 148, 89]],
	steps:10
});

