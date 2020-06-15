new Swiper('.footer-img .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        reverseDirection: true,
        disableOnInteraction: false,
    }
});

var cargarOpiniones = function (opiniones) {
    var n = opiniones.length;
    var html = '';
    for (var i = 0; i < n; i++) {
        var data = opiniones[i];
        if (i % 4 === 0) {
            html += '<div class="swiper-slide"><div class="row">';
        }
        html += '<div class="col-md-6"><div class="media">';

        var img = '';
        try {
            img = data._embedded['wp:featuredmedia'][0].media_details.sizes['comentario-thumb'].source_url;
        } catch (e) {
        }
        html += '<img style="width:80px;height:80px" class="align-self-start mr-3" src="' + img + '"/>';
        html += '<div class="media-body">';
        html += '<h5 class="mt-0">' + data.title.rendered + '</h5>';
        html += '<div class="content">' + data.content.rendered + '</div>';
        html += '</div></div></div>';
        if (i % 4 === 3) {
            html += '</div></div>';
        }
    }
    document.getElementById('c-opiniones').innerHTML = html;
    new Swiper('.opiniones .swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
};