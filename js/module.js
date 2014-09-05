function Module(name, hp) {
    var name = name;
    var maxhp = hp;
    var hp = hp;
    return {
        getName: function() {
            return name
        },
        getMaxHp: function() {
            return maxhp;
        },
        getHp: function() {
            return hp;
        },
        increaseHp: function(number) {
            return hp = (hp+number>maxhp?maxhp:hp+number);
        },
        decreaseHp: function(number) {
            return hp = (hp-number<0?0:hp-number);
        },
        setHp: function(new_hp) {
            return hp = new_hp;
        },
        getCode: function() {
            return '<div class="item-code">'+this.name + " " + this.getHp() + "/" + this.getMaxHp()+'</div>'
        }
    }
};


function put_module(array, module) {
	var tmp = true;
	console.log(array)
	array.forEach(function(element, index) {
		console.log(index, element, tmp);
		if (element == undefined && tmp) {
			array[index] = module;
			console.log('put module '+module+' in '+index+' slot')
			tmp = false;
		} 
	})
}