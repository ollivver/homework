// jQuery slider plugin 
(function($) {

		var defaults = {
    	pixelsOffset: 200,
    	speed: 300	
    };	

    $.fn.slideImage = function(options) {

    var settings =$.extend(defaults, options);	
    
    var $elementsList = $(this);
    var $prev = $('.prev');
    var $next = $('.next');
    var currentLeftValue = 0;
    var elementsCount = $elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * settings.pixelsOffset);
    var maximumOffset = 0;	

    $prev.on('click', (function() {    
    		    
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += settings.pixelsOffset;
            $elementsList.animate({ left : currentLeftValue + "px"}, settings.speed);
        };

        if (currentLeftValue == maximumOffset) {
          currentLeftValue = (minimumOffset - settings.pixelsOffset);
        };                
    }));

    $next.on('click', (function() { 
    		       
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= settings.pixelsOffset;
            $elementsList.animate({ left : currentLeftValue + "px"}, settings.speed);
        };
       
        if (currentLeftValue == minimumOffset) {
          currentLeftValue = settings.pixelsOffset;
        };        
    }));

    return this;
  };

})(jQuery);

;// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();;//call a slider function
$('.slider-list').slideImage({
	pixelsOffset: 300,
	speed: 600
});

//call a template function
$(function() {

var $task = $('#template_task').html();
var pageInfo;
var taskData = [
{
    title: 'Вертий Александр Иванович',
    content: ['img/myphoto.jpg']
},
{
	title: 'Инженер-электронщик со склонностью к программированию',
	content: []
},
{
  title: 'Хочу учить фронт-енд, потому что: ',
  content: ['Как оказалось, инженеры по автоматизации никому не нужны',
   					'Заниматься тем, чем тебе не нравится, вредно для самооценки',
   					'Это реальная возможность применить свои умения и навыки']
},
{
	title: 'Мой контактный телефон: ',
	content: ['тел.: +3806608070807']
},
{
	title: 'Мой достуный профиль в LinkedIn: ',
	content: ['<a href="https://ua.linkedin.com/in/olexandr-vertiy-452b6990" target="_blank">LinkedIn</a>']
},
{
	title: 'Мой фидбек: ',
	content: ['Новые знания это всегда положительно...']
}
];

pageInfo = tmpl($task, {
	data: taskData
});


$('.template').append(pageInfo);

})
