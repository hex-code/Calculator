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
		resArea.value = opA + op;
		} else if (this.numbPos.id === 'butC') {
			resArea.value = '';
		} else if (this.numbPos.id === '=') {
			var arr = resArea.value;
			var b = parseInt(opA);
			for (var i = 0; i < arr.length; i++) {
				if ( arr.charAt(i) === op ) {
						var cache = i + 1;
						opB = '';
					for (var j = arr.length - (++i); j > 0; j--) {
						opB += arr.charAt(cache);
						cache++;
					}
				}
			}
			if ( op === '/') {
				var res = parseInt(opA) / parseInt(opB);
			} else if ( op === '*' ) {
				var res = parseInt(opA) * parseInt(opB);
			} else if ( op === '+' ){
				var res = parseInt(opA) + parseInt(opB);
			} else {
				var res = parseInt(opA) - parseInt(opB);
			}
			resArea.value = res;
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