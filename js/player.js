player = (function(){
	var inventory = inventory;
	var homunculus = {};
	return {
		getInventory: function() {
			return inventory;
		},
		getHomunculus: function() {
			return homunculus;
		}
	};
})();