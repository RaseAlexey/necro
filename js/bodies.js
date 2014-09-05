function Body(name, hp, limbs, sensors, visceras) {
    var me = Module(name, hp);
    var limbs = new Array(limbs);
    var sensors = new Array(sensors);
    var visceras = new Array(visceras);
   
    me.getLimbs = function() {
        return limbs;
    };
    me.getSensors = function() {
         return sensors;
    };
    me.getVisceras = function() {
        return visceras;
    };
    me.getCode = function() {
        var items = this.getLimbs().concat(this.getSensors().concat(this.getSensors()));
        var code = '<div class="body-code">' + this.getName() + "<br>" +
        + this.getHp() + '/' + this.getMaxHp();
        items.forEach(function(element, index) {
            code += element.getCode();
        });
        code += '</div>';
        return code;
    };
    me.constructor = arguments.callee; 
    return me;  
}
   

bodies = {
    'triangle': new Body('triangle', 10, 3, 3, 3),
    'meatwall': new Body('meatwall', 100, 1, 0, 0)
};

test = bodies['triangle']