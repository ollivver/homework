'use strict';

//unit #1 - the Google Search API
function searchGoogle(startIndex) {

        var searchUrl = 'https://ajax.googleapis.com/ajax/services/search/web';
        var keyAPI = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';
        var $searchInput = $('input[name="search-text"]');
        var query = $searchInput.val();

        $.ajax({
            url: searchUrl,
            dataType: 'jsonp',
            method : 'GET',
            data: {
                key: keyAPI,
                q: query,
                v: '1.0',
                rsz: 8,
                start: startIndex,                
            },
        })  
            //the .done() method replaces the deprecated .success() method      
            .done(function(data) {
                                
                if (data.responseStatus != 200) {
                    console.log('Error: ' + data.responseStatus + ' : ' + data.responseDetails );
                }; 
                
                $('.search__result__data div').remove();
                $('.search__result__cursor div').remove();

                var htmlData = tmpl('googleData', data.responseData);
                //apply the template to the data, and add to the page                
                $('.search__result__data').append(htmlData);

                var htmlCursor = tmpl('googleCursor', data.responseData.cursor);
                //apply a template to a page number and add to the page               
                $('.search__result__cursor').append(htmlCursor);
                
            })
            //the .fail() method replaces the deprecated .error() method 
            .fail(function(xhr, textStatus, errorThrown) {
                console.log('Request failed: '+ textStatus);
            })
            //the .always() method replaces the deprecated .complete() method
            .always(function() {
                console.log('search completed');
            });
};

//perform the search after pressing the search button
$(function () {
    $('form').on('submit', function (e) {

        e.preventDefault();
        
        searchGoogle(0);
    });
});


//unit #2 - the prototype object
function Human() {
    this.name = 'John';
    this.age = '32';
    this.sex = 'male';
    this.height = 180;
    this.weight = 84;
}

function Worker() {
    this.job = 'factory';
    this.salary = 800;
    this.working = function() {
        console.log('working hard');
    }
}

function Student() {
    this.institution = 'university';
    this.scholarship = 200;
    this.watchSerials = function() {
        console.log('watching serials hard too');
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var worker1 = new Worker();
console.log('worker1', worker1);

var worker2 = new Worker();
console.log('worker2', worker2);

var student1 = new Student();
console.log('student1', student1);

var student2 = new Student();
console.log('student2', student2);