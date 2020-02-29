// RANGE SLIDER PRIJS PAGE
jQuery( document ).ready(function() {
	console.log("hi")
	var $r = jQuery('input[type="range"]');
	var $ruler = jQuery('<div class="rangeslider__ruler" />');

	// Initialize
	$r.rangeslider({
	polyfill: false,
	onInit: function() {
	$ruler[0].innerHTML = getRulerRange(this.min, this.max, this.step);
	this.$range.prepend($ruler);}
	});

	function getRulerRange(min, max, step) {
	var range = '';
	var i = min;
	console.log(max);
	while (i <= max) {
	range += i + ' ';
	i = i + step;
	}
	return range;
	}
})
