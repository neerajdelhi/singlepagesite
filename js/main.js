jQuery(document).ready(function(){
    'use strict';

    $('#slider-carousel').carouFredSel({
        // responsive:true,
        // width:'500%',
        // circular:true,
        // scroll:{
        //     items:1,
        //     durartion:500,
        //     pauseOnHover:true
        // },
        // auto:true,
        // items:{
        //     visibile:{
        //         min:1,
        //         max:1
        //     },
        //     height:'variable'
        // }
        items     : 1,
        responsive:true,
        direction : "left",
		width:'100%!important',
        scroll : {
            items         : 1,
            // easing        : "elastic",
            duration      : 500,
            pauseOnHover  : true
        },
        items:{
            visible:{
                min:1,
                max:1,
            }
        },
		pagination:{
			container: '.sliderpager',
			anchorBuilder: false
		}
    });
	
	$('.portfolio-carousel').carouFredSel({
		responsive:true,
		items:1,
		align: "center",
		prev:'#prev',
		next:'#next', 
		direction:"left",
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true,
		},
		items:{
			visible:{
				min:1,
				max:4,
			}
		},
		pagination:{
			container:'.portfolio-nav',
			anchorBuilder:false,
		}
	});
	
	$('.team-carousel').carouFredSel({
		responsive:true,
		items:1,
		circular:true,
		align:'center',
		direction:'left',
		prev:'#team-prev',
		next:'#team-next',
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true
		},
		items:{
			visible:{
				min:1,
				max:4,
			}
		}
	});
	
	$('.testimonial-carousel').carouFredSel({
		responsive:true,
		items:1,
		align:'center',
		direction:'left',
		width:'100%',
		width:'960px',
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true,
		},
		items:{
			visible:{
				min:1,
				max:1,
			}
		},
		pagination:{
			container:'.testimonial-sliderpager',
			anchorBuilder:false,
		}
	});

	//slicNave
	$('#menu').slicknav();
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=60){
			$('header').addClass('secondary-dark-blue-bg');
		}
		else
			if($('header').hasClass('secondary-dark-blue-bg')){
				$('header').removeClass('secondary-dark-blue-bg');
			}
	});
	
});