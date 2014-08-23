
function Body(limbs, sensors, visceras) {
    var limbs = new Array(limbs);
    var sensors = new Array(sensors);
    var visceras = new Array(visceras);
    return {
    	getLimbs: function() {
    		return limbs;
    	},
    	getSensors: function() {
    		return sensors;
    	},
    	getVisceras: function() {
    		return visceras;
    	}
    }
}

bodies = {
    'triangle': new Body(3, 3, 3)
};