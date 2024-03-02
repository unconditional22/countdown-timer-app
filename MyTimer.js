/*function getTimeRemaining(endtime){
	//calculate the time remaining
	const total = Date.parse(endtime) - Date.parse(new Date());

	// Convert the Time to a usable format
	const seconds = Math.floor( (total/1000) % 60 );
	const minutes = Math.floor( (total/1000/60) % 60 );
	const hours = Math.floor( (total/(1000*60*60)) % 24 );
	const days = Math.floor( (total/(1000*60*60*24) );
	
	return {
		total,
		days,
		hours,
		minutes,
		seconds,
	};
}

function intializeClock(id, endtime) {
	const clock = document.getElementById(id);
	const daysSpan = clock.querySelector('.days');
	const hoursSpan = clock.querySelector('.hours');
	const minutesSpan = clock.querySelector('.minutes');
	const secondsSpan = clock.querySelector('.seonds');
		
	function updateClock() {
	const total = getTimeRemaining(endtime);
	daysSpan.innerHTML = total.days;
	hoursSpan.innerHTML = ('0' + total.hours).slice(2);
	minutesSpan.innerHTML = ('0' + total.minutes).slice(2);
	secondsSpan.innerHTML = ('0' + total.seconds).slice(2);
		
	if (t.total <= 0) {
		clearInterval(timeinterval);
	}
}
		
updateClock(); // run function once at first, to avoid delay.
const timeinterval = setInterval(updateClock,1000);		
		
}		
	
const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000;
						  intializeClock('clock', deadline);
		
	
*/	



