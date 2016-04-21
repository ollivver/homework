//call a slider function
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
	content: ['тел.: +380660878017', 'skype: ol.vertiy']
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
