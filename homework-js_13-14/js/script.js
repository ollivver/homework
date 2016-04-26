'use strict';

//test questions and answers declaration
var testForm = [
{
    question: 'Вопрос №1',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    name: 'question1',
    checkbox: ['0', '1', '0']    
},
{
    question: 'Вопрос №2',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    name: 'question2',
    checkbox: ['0', '1', '0']     
},
{
    question: 'Вопрос №3',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    name: 'question3',
    checkbox: ['0', '1', '0']     
}
];

//object written in localStorage
localStorage.setItem('testStorage', JSON.stringify(testForm));

//obtain data from localStorage
try {
        var testContent = localStorage.getItem('testStorage');
        testContent = JSON.parse(testContent);
        
    }   catch(err) {

        console.log("JSON parse failed for lookup of ", key, "\n error was: ", err);
        
    };

//rendering a data page
var $tmplHtml = $('#test__quiz').html(); 
var pageInfo = tmpl($tmplHtml, { 
    data: testContent
    });

$(pageInfo).insertBefore($('.test__submit'));

//tracking  checkbox changes
$('input.checkbox').change(function() {
    //selected checkboxes in each block
    var $block1 = $("form :checkbox[name=question1]").is(':checked');
    var $block2 = $("form :checkbox[name=question2]").is(':checked');
    var $block3 = $("form :checkbox[name=question3]").is(':checked');

    //count the number of selected checkboxes in each block
    var $countCheck = ($block1 ? 1 : 0) + ($block2 ? 1 : 0) + ($block3 ? 1 : 0);

    //console.log('1', $block1);
    //console.log('2', $block2);
    //console.log('3', $block3);
    //console.log('count', $countCheck);

    //limiting the choice of the number of checkboxes
    if (($countCheck >= 1) && ($block3)) {
            $('input.checkbox[name=question3]:not(:checked)').attr('disabled', 'disabled');
        } else if (($countCheck >= 1) && ($block2)) {
            $('input.checkbox[name=question2]:not(:checked)').attr('disabled', 'disabled');
        } else if (($countCheck >= 1) && ($block1)) {
            $('input.checkbox[name=question1]:not(:checked)').attr('disabled', 'disabled');
        } else {
            $('input.checkbox:disabled').removeAttr('disabled');
        }; 
});

//count the number of answers and selected checkboxes after pressing the button 'check my results'
$('.test__submit').on('click', function(event) {
    event.preventDefault();
    //the number of correct answers
    var $totalResult = 0;
    //the number of selected checkboxes
    var $counts = 0;
       
    $('.checkbox').each(function() {
        if ($(this).is(':checked')) {
            $totalResult += parseInt($(this).attr('value'));
        };

        $counts = $('input.checkbox:checked').length;    

    });

    //console.log('sum', $totalResult); 
    //console.log('counts', $counts); 

    //choice text for a modal window on the basis of the answers and the number of selected checkboxes
    if (($totalResult == 3)&&($counts == 3)) {
        $('.modal__text')[0].innerHTML = 'Вы прошли тест'; //write the test result in a modal window
    } else if (($totalResult < 3)&&($counts == 3)) {
        $('.modal__text')[0].innerHTML = 'Вы не прошли тест, некоторые ответы не верные'; 
    } else if ($counts < 3) {
        $('.modal__text')[0].innerHTML = 'Некоторые ответы не выбраны'; 
    } else if ($counts > 3) {
        $('.modal__text')[0].innerHTML = 'На каждый вопрос должен быть выбран только один ответ'; 
    };

    //show overlay
    $('.overlay').fadeIn(600);
    //show a modal window
    $('.modal__form').css("display", "block").animate({opacity: 1, top: '50%'}, 600); 
           
});

//closing the modal window after pressing the button 'X'
$('.modal__close').on('click', function(){
    $('.modal__form').animate({opacity: 0, top: '40%'}, 600,
        function() {
            //remove modal window
            $(this).css("display", "none");
            //remove overlay 
            $('.overlay').fadeOut(600); 
        });
    //clear the checkboxes
    $('input.checkbox').each(function() { 
        $(this).removeAttr('disabled').prop('checked', false);
    });
});    
