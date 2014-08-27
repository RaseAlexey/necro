function Module(hp) {
    var maxhp = hp;
    var hp = hp;
    return {
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
        }
    }
};