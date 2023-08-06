function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;

	for (i = 0; i < arr.length; i += 1) {
		min = Math.min(min, arr[i]);
		max = Math.max(max, arr[i]);
		sum += arr[i];
	}
	avg = +(sum/arr.length).toFixed(2);

	return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
