//Choice Assignment: #1 or #2
//var choice = prompt ('Для просмотра ДЗ-1 введите 1, для ДЗ-2 введите 2',' ');

//switch (choice) {
    //case '1':
        //check the entered values - it is the number?
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        //the construction of the power
        function power(base, exp) {
            if (base == 0) {
                var result = 0;         //if the base is 0
            } else if (exp == 0) {
                var result = 1;         //if the exp is 0
            } else {
                var result = 1;
            };
            for (var i = 0; i < exp; i++) {
            result = result * base;
            }   
            return result;      
        }

        try {
            module.exports = power;
        } catch (e) {}
        //prompted to enter the number
        /*var base = console.log('Введите целое число, не равное 0', ' ');
        
        if (!isNumeric(base)) {
          console.log('Это не то число, которое требуется');
        }

        var exp = console.log('Введите степень числа', ' ');
        
        if (!isNumeric(exp)) {
          console.log('Это не то число, которое требуется');
        }

        var resultPow = power(base, exp);
        //console output
        console.log(resultPow);

        //alert('Число ' + base + 'в степени ' + exp + ' = ' + power(base, exp));
        //break;

    /*case '2':
        //array
        var nameArr = []; //create a new array
            //fill an array
            for(var i = 0; i < 5; i++) {
              nameArr[i] = prompt('Введите ' + (i + 1) + ' элемент массива, состоящий из 5 любых имен', ' ');
            }
        console.log(nameArr); 
        //var type;
        //type = typeof(nameArr[i]);
        //console.log(type);

        var user = prompt('Введите имя пользователя', ' ');
        console.log(user);

        //check if the name in the array
        for (var j = 0; j < nameArr.length; j++) {
        	if (user == nameArr[j]) {
          		alert(user + ', вы успешно вошли.');
              var permit = 1;  //coincidence mark
          		break;
          	} 
        }

        //no name in array
        if (permit != 1) {
          alert('Такого имени пользователя в массиве нет');
        }
        break;

    default:
        alert('Неправильный выбор', ' ');
        break;
    
} */


