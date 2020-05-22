// JavaScript Document
	$(function(){
		
		//submenu
		$(function(){
			$('.dropDown').hover(function(){
				if($(this).parent().hasClass('nav')) return false;
				$(this).find('.submenu').stop(false,true).slideDown(200);
			},function(){
				if($(this).parent().hasClass('nav')) return false;
				$(this).find('.submenu').stop(false,true).slideUp(200);
			});
		});

		// 網頁頭快速連結
		$(".m_menu .main_quickLink_box").append($("header .main_quickLink").clone());
		$(".m_menu .main_quickLink_inbox").append($("header .main_quickLink").clone());
		
		//mobile menu
		var $m_menu = $('ul.menu').clone();
		var $top_m_menu = "" ;//$('.topLink').find('.rightBox').children('a').not('.exclude').clone();
				
		$m_menu.insertAfter('.m_menu .hideBox p.sp_menu').removeClass().addClass('nav').find('b').remove().end().append($top_m_menu).children('a').wrap('<li/>').end().find('li.dropDown').each(function(){
			$(this).children('a').removeClass().append('<i class="fa fa-angle-down" />').attr('href','');
		});
				
		$('.m_menu').find('a.main').click(function(){
			if(!$(this).parents('.m_menu').hasClass('active')){
				$(this).parents('.m_menu').addClass('active');
				$(this).find('i').addClass('fa-times').removeClass('fa-reorder');
				$('.m_menu').find('.mask').fadeIn(100);
				$('.m_menu').find('.hideBox').fadeIn(100);
				$('body').css('overflow','hidden');
				$('.m_menu').find('.mask').click(function(){/*點空白處收起menu*/
					$('.m_menu').removeClass('active');
					$('.m_menu').find('.hideBox').fadeOut();
					$('.m_menu').find('.mask').fadeOut();
				});
			}else{
				$(this).parents('.m_menu').removeClass('active');
				$(this).find('i').addClass('fa-reorder').removeClass('fa-times');
				$('.m_menu').find('.mask').fadeOut();
				$('.m_menu').find('.hideBox').fadeOut();
				$('body').css('overflow','auto');
			}//end if hasClass
						
			return false;
		});
		
		$('.m_menu').find('li.dropDown').children('a').click(function(){
			$(this).siblings().slideToggle();
			return false;
		});

		
		//classLink
		$('.classLink').find('li.dropDown').hover(function(){
			$('.classLink').find('li.dropDown').not(this).find('dl').slideUp(200);
			$(this).find('dl').slideToggle();
			return false;
		});
		
		//mobile classLink
		var $clone = $('ul.classLink').clone().removeClass('classLink'),
			  $current_txt = $('ul.classLink').find('.current').text();
		$('ul.classLink').after('<div class="m_classLink"><a class="main"><b></b><i class="fa fa-angle-down"></i></a></div>');
		$('.m_classLink').append($clone).end().find('a.main b').text($current_txt);
		
		$('.m_classLink').click(function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open').find('ul').stop().slideUp(200);
				$(this).find('a.main').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
			}else{
				$(this).addClass('open').find('ul').stop().slideDown(200);
				$(this).find('a.main').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
			}
		});
		
		//textEditor img
		// if(isMobile){			
		// 	$('.textEditor').find('img').each(function(){
		// 		var href = $(this).attr('src').replace('_m','_b');
		// 		$(this).wrap('<a class="titan-lb" href="' +href+ '"</a>');
		// 	});			
		// }
		
		//mailLink
		$('.contactLink').click(function(){
			if(isMobile){
				var href = $(this).data('mail');
				window.location.href= 'mailto:'+href;
				return false;
			}
		});

        $(window).scroll(function(){
            if($(document).scrollTop() > 50){
                $('header').addClass('shrink');
            }else{
                $('header').removeClass('shrink');
            }
        });

		//gotop
		$('.goTop').click(function(){
			$('body,html').stop().animate({scrollTop:0},1500);
			return false;
		});

		//scrollDown
		$('.scroll').click(function() {
			$('html,body').animate({scrollTop:(($('.mainArea').offset().top) - 50)},1000);
			return false;
        });
				
		//fix contactInfo height
		$('.side_contactInfo').find('b').each(function(){
			if($(this).height() <= 20) $(this).siblings('i').css('float','none').css('display','inline-block');
		});
		
	});