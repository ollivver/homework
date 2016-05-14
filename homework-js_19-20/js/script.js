/* call and control carousel plugin */
$(function() {
    $('.head__jcarousel')
        .jcarousel({
            animation: 'slow'
        })
        .jcarouselAutoscroll({
            interval: 9000,
            target: '+=1',
            autostart: true
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

/* call and control accordion plugin */
$(".accordion").accordion({
//whether the first section is expanded or not
firstChildExpand: true,
//whether expanding mulitple section is allowed or not
multiExpand: false,
//slide animation speed
slideSpeed: 500,
//drop down icon
dropDownIcon: "&#8635;",
});
