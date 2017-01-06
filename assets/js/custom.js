jQuery (function ($){
    $('.move_up').on('click', function(e){ 
    	e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });


    $('.navbar-nav a').on('click', function(){ 
    	if (this.hash){
    		var cHash = $(this.hash);
    		if (cHash.length>0){
	    		console.log(cHash.position().top);
	    		console.log('Height: ' + $('.navbar').height());
	    		$('html,body').animate({ scrollTop: cHash.position().top-$('.navbar').height() }, 'slow');
	        	return false; 
    		}
    	}
    });
});

jQuery(document).ready(function($) {
	new WOW().init();
});

