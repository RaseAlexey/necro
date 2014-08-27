/*
function Body(hp, limbs, sensors, visceras) {
    var max_hp, hp = hp;
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
*/



function Body(name, hp, limbs, sensors, visceras) {
    var me = Module(hp);
    var name = name;
    var limbs = new Array(limbs);
    var sensors = new Array(sensors);
    var visceras = new Array(visceras);

    me.getName = function() {
        return name
    };      
    me.getLimbs = function() {
        return limbs;
    };
    me.getSensors = function() {
         return sensors;
    };
    me.getVisceras = function() {
        return visceras;
    };
    me.constructor = arguments.callee; 
    return me;  
}
   

bodies = {
    'triangle': new Body('triangle', 10, 3, 3, 3)
};