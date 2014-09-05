player = (function(homunculus, inventory){
	var homunculus = homunculus;
	var inventory = inventory;
	return {
		getInventory: function() {
			return inventory;
		},
		setHomunculus: function(new_homunculus) {
			return homunculus=new_homunculus;
		},
		getHomunculus: function() {
			return homunculus;
		},
		getCode: function() {
			var code = '<div class="player-code">' +
			this.getHomunculus().getCode() + 
			'</div>';
			return code;
		}
	};
})(new Homunculus(test),inventory);   