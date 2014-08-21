var test_stats = {
	oxygen: 10,
	filter: 10
};
var test_slots = {
	limbs: [null, null, null, null],
	sensors: [null, null],
	visceras: [null, null, null]
};

Body = (function(stats, slots){
	var stats = stats;
	var slots = slots;
	var inventory = [];
	return {
		getStats: function() {
			return stats;
		},
		getSlots: function() {
			return slots;
		},
		getInventory: function() {
			return inventory;
		},
		requireStats: function(req_stats) {
			var output = true;
			$.each(req_stats, function(stat, value) {
				if (value > stats[stat]) {output = false;}
			});		
			return output;
		},
		getSlot: function(slot) {
			var slot_index = null;
			slots[slot].every(function(element, index){
				if (element == null && slot_index == null) {
					slot_index = index;
					return false
				} else return true;
			})
			return slot_index;
		},
		addItem: function(item) {
			return inventory.push(item);
		},
		removeItem: function(index) {
			return inventory.splice(index, 1);
		},
		putItemOn: function(index) {
			var item = inventory[index];
			var slot_number = this.getSlot(item.type);	
			if (this.requireStats(item.requirements) && slot_number!=null) {
				this.removeItem(index);
				return slots[item.type][slot_number] = item;
			} else return undefined
		},
		takeItemOff: function(type, number) {
			inventory.push(slots[type][number]);
			slots[type][number] = null;
		}
	};
})(test_stats, test_slots);