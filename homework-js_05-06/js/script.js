var timerOn = 0;  			//timer on/off
var t;									//variable for setTimeout in displayTimer function	
var mst;								////variable for setTimeout in displayMs function
var milliseconds = 0;		
var seconds = 0;
var minutes = 0;
var hours = 0;
var dHMS = 0;						// display Hours, Minutes, Seconds in the 'split__data' field 
var dMs = 0;						// display milliseconds in the 'split__data' field

//write data after the page loads
function initialData() {
	document.getElementsByName("timer__data")[0].value = '00'+ ' : ' + '00' + ' : ' + '00';
	document.getElementsByName("ms__data")[0].value = ' : ' + '000';
}
//Timer output data without ms data
function displayTimer() {
	seconds += 1;
	if (seconds > 59) {
		minutes += 1;
		seconds = 0;
	}
	if (seconds > 9) {
		var sec = seconds;
	} else {
		var sec = "0" + seconds; //add extra zero in the tens digit 
	}
	if (minutes > 59) {
		hours += 1;
		minutes = 0;
	}
	if (minutes > 9) {
		var min = minutes;
	} else {
		var min = "0" + minutes; //add extra zero in the tens digit
	}
	if (hours == 24) {
		milliseconds = 0;
		seconds = 0;
		minutes = 0;
		hours = 0;
	}
	if (hours > 9) {
		var hr = hours;
	} else {
		var hr = "0" + hours; //add extra zero in the tens digit
	}
	t = setTimeout(displayTimer, 1000);
	dHMS = document.display.timer__data.value = hr + ' : ' + min + ' : ' + sec; 
}

//milliseconds values read and output 
function displayMs() {
	var date = new Date();
	milliseconds = date.getMilliseconds();
	//add zeros in the empty spaces
	if (milliseconds < 9) {
		var ms = "00" + milliseconds;
	}
	if ((milliseconds > 9) && (milliseconds < 99)) {
		var ms = "0" + milliseconds;
	} else {
		var ms = milliseconds;
	}
	mst = setTimeout(displayMs, 1);
	dMs = document.display.ms__data.value = " : " + ms;
}

//enable/disable the timer counter 
function counterOnOff() {
	if (!timerOn) {
		timerOn = 1; // timer on
		//delay timer 1 sec,  adjusted delay time (1sec - ms) 
		var startTimer = setTimeout(displayTimer, (1000 - milliseconds));
		displayMs();
		var elem = document.getElementsByName("start__pause");
		elem[0].innerHTML = "Stop";
	} else {
		clearTimeout(t);
		clearTimeout(mst);
		clearTimeout(startTimer);
		timerOn = 0; //timer off
		var elem = document.getElementsByName("start__pause");
		elem[0].innerHTML = "Start";
		splitTimer();
	}
	console.log(timerOn);
}

//clear data
function counterReset() {
	clearTimeout(t);
	clearTimeout(mst);
	timerOn = 0;
	milliseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	document.getElementsByName("timer__data")[0].value = '00'+ ' : ' + '00' + ' : ' + '00';
	document.getElementsByName("ms__data")[0].value = ' : ' + '000';
	document.getElementById("split__data").innerHTML = '';
}

//timestamps output
function splitTimer() {
	//label to determine the source of the data output
	if (!timerOn) {
		var label = "stop\n";
	} else {
		var label = "split\n";
	}
	//output in the 'split__data' field
	var split = document.getElementsByName("timer__data")[0].value;
	var splitMs = document.getElementsByName("ms__data")[0].value;
	document.getElementById("split__data").innerHTML += ((split + splitMs) || (dHMS + dMs)) + " " + label;
} 