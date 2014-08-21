
var stack = {};

var max_oxygen = 5;
var oxygen = 5;

function add(spell) {
    if (oxygen - spell.oxygen >= 0) {
        oxygen -= spell.oxygen;
        stack[spell.name] = spell.length;
    }
    else {
        return false;
    }
}

function tick() {
    oxygen.each(function(key, value) {
        oxygen[key]--;
        if (value == 0) {
            oxygen.remove(key);
        }
    });
}

//timeout tick 1000

