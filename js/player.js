player = (function(inventory){
	var inventory = inventory;
	var homunculus = {};
	return {
		getInventory: function() {
			return inventory;
		},
		setHomunculus: function(new_homunculus) {
			return homunculus=new_homunculus;
		},
		getHomunculus: function() {
			return homunculus;
		}
	};
})(inventory);