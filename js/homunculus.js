
function Homunculus(body) {
    this.body = body;

    this.getBody = function() {
        return this.body;
    };
    this.getMaxHp = function() {
        return this.body.getMaxHp();
    };
    this.getHp = function() {
        return this.body.getHp();
    };
    this.getCode = function() {
    	var code = '';
    	code += '<div class="homunculus_code">';
    	code += this.getBody().getCode() + '</div>';
    	return code;
    }
}