inventory = (function(){
	var items = [];
	return {
		getItems: function() {
			return items;
		},
		getItem: function(index) {
			return items[index];
		},
		addItem: function(item) {
			return items.push(item);
		},
		removeItem: function(index) {
			return items.splice(index, 1);
		},
		putItemOn: function(index) {
			var item = items[index];
			var slot_number = player.homunculus.getSlot(item.type);	
			if (player.homunculus.requireStats(item.requirements) && slot_number!=null) {
				this.removeItem(index);
				return player.homunculus.slots[item.type][slot_number] = item;
			} else return undefined
		},
		takeItemOff: function(type, number) {
			items.push(player.homunculus.slots[type][number]);
			player.homunculus.slots[type][number] = null;
		}
	};
})();