jQuery( document ).ready(function($) {
    
    // Load Instagram Feed on Homepage
    if($('#homepage-instagram-feed').length){
        var promotionslider = tns({
            container: '#homepage-promotions-slider',
            items: 1,
            slideBy: 'page',
            mouseDrag: true
        });
    }
    
    // Load Mobile Menu
    new Mmenu( "#navbar-mobile", {
        extensions 	: ["fx-panels-slide-100", "border-none", "fullscreen", "position-right" ],
        wrappers    : ["bootstrap"],
        navbars		: [
            {
			content : [
				"<div id='navbar-mobile-logo'><img src=" + petronastwintowers.themeurl + "/img/logo-white.svg'></div>",
                "close",
			]},
            {
			content : [
                "<form role='search' method='get' class='search-form' action='" + petronastwintowers.siteurl + "/'><input type='search' class='search-field' placeholder='Search' value='' name='s' /><input type='submit' class='search-submit' value='Search' /></form>"
			]},
            //{
			//content : [
                //"<a class='btn' href='https://eticket.petronastwintowers.com.my/'><img id='ticket-icon' src='/wp-content/themes/petronas-twin-towers/img/ticket-icon.svg'>Buy Tickets</a>"
			//]},
            {
            position: "bottom",
			content : [
                "<a href='https://www.facebook.com/petronastwintowersofficial'><span id='mm-facebook'></span></a><a href='https://www.instagram.com/petronastwintowers/'><span id='mm-instagram'></span></a><a href='https://www.youtube.com/channel/UCEAg-rTE-zTTjfjRm0fzmBQ'><span id='mm-youtube'></span></a><a href='https://www.tripadvisor.com.my/Attraction_Review-g298570-d317521-Reviews-Petronas_Twin_Towers-Kuala_Lumpur_Wilayah_Persekutuan.html'><span id='mm-tripadvisor'</span></a>"
			]}
        ]
    }, {
        // configuration
        offCanvas: {
            page: {
                selector: "#page"
            }
        }
    });
    
    // Custom navbar
    $('#menu-primary > li > .nav-link').on('click', function() {
        $('.navbar').addClass('active');
        $('#menu-primary > li > ul .menu-item').css('opacity', 0).delay(100).each(function(i) {
            $(this).delay(30 * i).stop().animate({opacity: 1}, 400);
        });
    })
    
    // Show navbar highlight on desktop
    if ($(window).width() > 991) {
            $('body').on('mouseenter', 'header .navbar', function(){
                $(this).addClass('active');
                $('#navbar-primary > ul > li > .nav-link').on('mouseover', function(e) {
                    $('.dropdown-menu').removeClass('show');
                    $(e.target).next('.dropdown-menu').addClass('show');
                })
                $('#navbar-secondary .dropdown-toggle').on('mouseover', function(e) {
                    $('.dropdown-menu').removeClass('show');
                    $(e.target).next('.dropdown-menu').addClass('show');
                })
            })

            $('body').on('mouseleave', 'header .navbar', function(){
                $(this).removeClass('active');
                if($('#navbar-secondary .dropdown-menu').hasClass('show')){
                    $('#navbar-secondary .dropdown-menu').removeClass('show');
                }
                if($('#navbar-primary .dropdown-menu').hasClass('show')){
                    $('#navbar-primary .dropdown-menu').removeClass('show');
                }
            })
        }
    
    $(window).on('resize', function(){
        if ($(window).width() > 991) {
            $('body').on('mouseenter', 'header .navbar', function(){
                $(this).addClass('active');
                $('#navbar-primary > ul > li > .nav-link').on('mouseover', function(e) {
                    $('.dropdown-menu').removeClass('show');
                    $(e.target).next('.dropdown-menu').addClass('show');
                })
                $('#navbar-secondary .dropdown-toggle').on('mouseover', function(e) {
                    $('.dropdown-menu').removeClass('show');
                    $(e.target).next('.dropdown-menu').addClass('show');
                })
            })

            $('body').on('mouseleave', 'header .navbar', function(){
                $(this).removeClass('active');
                if($('#navbar-secondary .dropdown-menu').hasClass('show')){
                    $('#navbar-secondary .dropdown-menu').removeClass('show');
                }
                if($('#navbar-primary .dropdown-menu').hasClass('show')){
                    $('#navbar-primary .dropdown-menu').removeClass('show');
                }
            })
        }
    })
    
    // Search (Fullscreen)
    $('#navbar-search').on('click', function() {
        $('#search').addClass('active');
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    })
    
    $('#search-close').on('click', function() {
        $('#search').removeClass('active');
        $('html, body').css({
            overflow: 'auto',
            height: '100%'
        });
    })
    
    // Load the notification every 1 hour upon cookies expiration
    $('#notification-popup').on('hidden.bs.modal', function () {
        //Set a cookie to remember the state
        Cookies.set('notification-accepted', 'yes', {expires: 1/24, path: '/'});
    });
    
    $('#notification-popup a').on('click', function () {
        //Set a cookie to remember the state
        Cookies.set('notification-accepted', 'yes', {expires: 1/24, path: '/'});
        $('#notification-popup').modal('toggle');
    });
    
    // Load Notification Banner if enabled
    if($('#notification-popup').length){
        //Check it the user has been accepted the agreement
        if (!Cookies.get('notification-accepted')) {
            $('#notification-popup').modal('toggle');
        } 
    }
    
    // Load eticket notification
    $('.buy-tickets a, .mm-navbar a[href="https://eticket.petronastwintowers.com.my/"]').on('click', function(e) {
        e.preventDefault();
        $('#eticket-popup').modal('toggle');
    });

    // Contact Us Form
    if($('#contact-us').length){

        // Email Regex
        jQuery.validator.addMethod("emailRegex", function(value, element, param) {
            return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
        },'Please enter a valid email address.');

        // Payment submit
        var validator = $('#contact-us').validate({

            rules: {
                name: {
                    required: true
                },
                mobile: {
                    required: true,
                    minlength: 1,
                    maxlength: 16
                },
                email: {
                    required: true,
                    emailRegex: true
                },
                subject: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Please insert your name."
                },
                mobile: {
                    required: "Please insert your mobile phone number."
                },
                email: {
                    required: "Please insert your email."
                }
            },
            submitHandler: function(form) {

                $("#submit-btn").addClass('active');
                $("#submit-btn").attr("disabled","disabled")

                $.ajax({
                    url: petronastwintowers.themeurl + "/forms/contact-us.php",
                    type: "POST",  
                    data: $(form).serialize(),       
                    success: function (responseData) {
                        console.log(responseData);
                        var data = jQuery.parseJSON(responseData);
                        if(data.status == "success"){
                            $('#submit-btn').removeAttr('disabled');
                            $('#contact-us-response .modal-body').text('Your email has been sent successfully. We will get back to you as soon as we can.');
                            $('#contact-us-response').modal('toggle');
                        } else {
                            $('#submit-btn').removeAttr('disabled');
                            $('#contact-us-response .modal-body').text('Your message was not delivered. Please try again.');
                            $('#contact-us-response').modal('toggle');
                        }
                    }       
                });

                return false;
            }
        });
    }
});




(function($){
    $(window).on('load', function(){
        if($('#homepage-instagram-feed').length){
            $.instagramFeed({
                'tag': 'mytwintowers',
                'get_data': true,
                'items': 12,
                'callback': function(data){

                    var html;
                    var imgs = data.edge_hashtag_to_media.edges;

                    html = "<div id='instagram-gallery'>";

                    for(var i = 0; i < 20; i++){

                        if(imgs[i].node.__typename == 'GraphImage'){

                            var checker = imgs[i].node.accessibility_caption;

                            if (checker.indexOf('sky') > -1 || checker.indexOf('outdoor') > -1) {

                                var url = "https://www.instagram.com/p/" + imgs[i].node.shortcode;
                                switch(imgs[i].node.__typename){
                                    case "GraphSidecar":
                                        type_resource = "sidecar"
                                        image = imgs[i].node.thumbnail_resources[2].src;
                                        break;
                                    case "GraphVideo":
                                        type_resource = "video";
                                        image = imgs[i].node.thumbnail_resources[2].src;
                                        break;
                                    default:
                                        type_resource = "image";
                                        image = imgs[i].node.thumbnail_resources[2].src;
                                }

                                html += "<div><a href='" + url +"' class='instagram-" + type_resource + "' rel='noopener' target='_blank'>";
                                html += "<img class='img-fluid' src='" + image + "'/>";
                                html += "</a></div>";    

                                $('#homepage-instagram-feed').html(html);

                                var instagramslider = tns({
                                    container: '#instagram-gallery',
                                    controls: false,
                                    nav: false,
                                    gutter: 10,
                                    edgePadding: 50,
                                    fixedWidth: 320,
                                    mouseDrag: true
                                });
                            }
                        }
                    }

                    html += "</div>";
                }
            })
        }
    });
})(jQuery);
