jQuery(document).ready(function(){
	jQuery("#sidebar .btn-collapse").click(function(){
	    jQuery("#sidebar").addClass("close_sidebar");
	    jQuery(".left_part").toggle();
	});

	jQuery("#bottom_bar .bottom_collapse").click(function(){
	    jQuery("#bottom_bar").addClass("close_bottom");
	    jQuery(".bottm_inner_part").toggle();
	});



})
