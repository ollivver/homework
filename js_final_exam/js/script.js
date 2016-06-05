/* call and control carousel plugin */
$(function() {
    $('.head__jcarousel')
        .jcarousel({
            animation: false
        })
        .jcarouselAutoscroll({
            interval: 9000,
            target: '+=1',
            autostart: false
        });
        /* 'next-' and 'prev-' button control */
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
        });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
        });
        /* pagination control */    
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

});


// the initial set of images and titles
var imageset = [],
        ideas = [
            { "url": "img/ideas1.png", "word": "Sport and Activity" },
            { "url": "img/ideas2.png", "word": "Wellnes and Health" },
            { "url": "img/ideas3.png", "word": "Extreme Sports and Expeditions"},
            { "url": "img/ideas4.png", "word": "Games"},
            { "url": "img/ideas5.png", "word": "Culture and Education"},
            { "url": "img/ideas6.png", "word": "Relaxation"},
            { "url": "img/ideas7.png", "word": "Travelling"}];

// render initial image
function initImg(initData) {
    var dataNew = [];
    $.each(initData, function(i) {
        dataNew[i] = $.extend({}, initData[i]);
    });
        return dataNew;
};

// call template function
function renderTmpl(set){
    var html = tmpl($('#ideas__template').html(), { data: set });
    $('.ideas__pictures').html(html);
};

// call masonry plugin
function tale(el) {
    $(el).masonry({
                    itemSelector: '.ideas__item',
                    columnWidth: $('.ideas__pictures').find('.grid-item')[0],
                    gutter: 5,
                    fitWidth: true,
                    resize: true 
                  });
};

// showing the initial data
var start = 1; // sign of rendering the initial set
if (start) {
    imageset = initImg(ideas);
    renderTmpl(imageset);
    tale('.ideas__pictures');
};

// request images from the server via Ajax
function imgRequest(query){
    // write query from input field
    var query = encodeURIComponent($('.ideas__search__input').val()); 
    
    $.ajax({
            method: 'GET',
            dataType: 'jsonp',
            cache: false, 
            url:'https://pixabay.com/api/?key=2566046-80b4e8851317db138039b9381&q='+ query + '&image_type=photo&orientation=horizontal&min_width=600',
    })           
        .done(function(data){
            start = 0; // prohibition of rendering the initial data
            var web = _.map(data.hits, 'webformatURL');
            var tag = _.map(data.hits, 'tags');
          
            for (i = 0; i < imageset.length; i++){
                imageset[i].url = web[i];   
                imageset[i].word = tag[i];
            };

            renderTmpl(imageset);   
            
            tale('ideas__item__wrapper');

            // changing tags and tales background colours without mobile layout
            if ((start == 0) && (window.innerWidth > 767)) {
                      var $color = $('.ideas__item__name');
                      $color.css({'color': '#ffcccc'});
                      //$('.ideas__item').css({'backgroundColor': '#ffcccc'});
                    };    
        })
        .fail(function(){
            console.log('Request failed: '+ textStatus);
        });      
};   

// entering the search word by pressing the 'Enter'
$('input[name="search__input"]').on('keyup', function(e) {
        if (e.which == 13)            
            $('.ideas__search__interests__button').trigger('click');
    });

// 
$('.ideas__search__interests__button').click(function(e){ 
    e.preventDefault();
    $.support.cors = true;   //   for ie8
    imgRequest();
    $('.ideas__search__input').val(""); //clear input field
});
