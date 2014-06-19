(function(cache, op, numberPos, opA, opB, res){
	var resArea = document.getElementById('screen');
	var but = document.getElementById('calc');
			but.onclick = function(e) {
var Calc = {
	numbPos: e.target,
	operation: function() {
		if (isNaN(this.numbPos.id) && this.numbPos.id != 'butC' && this.numbPos.id != '='){
		op = this.numbPos.id;
		opA = resArea.value;
		resArea.value = '';
		} else if (this.numbPos.id === 'butC') {
			resArea.value = '';
		} else if (this.numbPos.id === '=') {
			var arr = resArea.value;
			opB = resArea.value;
			var src = opA + op + opB;
			if ( op === '/') {
				var res = parseInt(opA) / parseInt(opB);
			} else if ( op === '*' ) {
				var res = parseInt(opA) * parseInt(opB);
			} else if ( op === '+' ){
				var res = parseInt(opA) + parseInt(opB);
			} else {
				var res = parseInt(opA) - parseInt(opB);
			}
			resArea.value = src + '=' + res;
		}
	},
	number: function() {
		if (!isNaN(this.numbPos.id)){
		a = parseInt(this.numbPos.id);
		resArea.value += a;
		};
	}
}
Calc.number();
Calc.operation();
};
})();