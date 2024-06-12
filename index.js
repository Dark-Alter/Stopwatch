let ms = 0;
let s = 0;
let min = 0;
let h = 0;
let isRunning = false;
let inetervalId;

function start(){

	if(!isRunning){
		isRunning=!isRunning;
		function updateStart(){
			ms++;
			ms>=100 ? (s++,ms=0): null;
			s>=60 ? (min++, s=0): null;
			min>=60 ? (h++, min=0): null;

			const stopwatch = `${h.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${s.toString().padStart(2,0)}:${ms.toString().padStart(2,0)}`;
			document.getElementById('stopwatchScreen').textContent = stopwatch; 
		}

		intervalId = setInterval(updateStart,10);
	}
}

function stop() {
	isRunning=!isRunning;
	clearInterval(intervalId);
}

function reset(){
	ms = 0;
	s = 0;
	min = 0;
	h = 0;
	isRunning=false;
	clearInterval(intervalId);
	document.getElementById('stopwatchScreen').textContent = "00:00:00:00";
}

