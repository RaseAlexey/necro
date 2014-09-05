fitting_room = (function(){
	return {
		open: function() {
			$('.battle').hide();
			this.draw();
			$('.fitting_room').show();
		},
		draw: function() {
			$(".homunculus").html(player_title + player.getCode());
		}
	}
})()