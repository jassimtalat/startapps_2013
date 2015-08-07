$(document).ready(function(){
	
	
	
	$('#destaques').cycle({ 
		fx:     'fade', 
		speed:  'fast', 
		timeout: 10000, 
		next:   '#next', 
		prev:   '#prev' ,
		pager:  '.nav',
		pagerAnchorBuilder: function paginate(idx, el) {
			return '';
       }
	});	
	
	$('#ilustras').cycle({ 
		fx:     'fadeZoom', 
		speed:  'fast', 
		timeout: 10000, 
		next:   '#next', 
		prev:   '#prev',
		pager:  '.nav',
		pagerAnchorBuilder: function paginate(idx, el) {
			return '';
       }
	});	
	$('#textos').cycle({ 
		fx:     'fade', 
		speed:  'fast', 
		timeout: 10000, 
		next:   '#next', 
		prev:   '#prev',
		pager:  '.nav',
		pagerAnchorBuilder: function paginate(idx, el) {
			return '';
       }
	});	
	
});

function setSlide(index) {
	$('#destaques').cycle(index);
	$('#ilustras').cycle(index);
	$('#textos').cycle(index);
}