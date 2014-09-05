battle = (function(enemy) {
	var enemy = enemy;
    return {
        start: function() {
			$('.fitting_room').hide();
			this.drawBoth();
			$('.battle').show();
        },
        drawBoth: function() {        	
			$(".enemy").html(enemy_title+enemy.getCode());
			$(".player").html(player_title+player.getCode());
        }
    }
})(new Homunculus(bodies['meatwall']));