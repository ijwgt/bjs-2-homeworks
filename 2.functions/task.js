function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;

	min = Math.min(min, ...arr);
	max = Math.max(max, ...arr);
	sum = arr.reduce(function (currentSum, currentNumber) {
		return currentSum + currentNumber
	});
	avg = +(sum / arr.length).toFixed(2);
	
	// for (i = 0; i < arr.length; i += 1) {
 	//    if (arr[i] < min) {min = arr[i]}; 
 	//    if (arr[i] > max) {max = arr[i]};
	//    sum += arr[i];
	// }
	// avg = +(sum / arr.length).toFixed(2);

	return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
	let sum = arr.reduce(function (currentSum, currentNumber) {
	return currentSum + currentNumber
});

	return sum;
}

function differenceMaxMinWorker(...arr) {
	let difference = max - min;
	let min = Infinity;
	let max = -Infinity;

	if (arr.length === 0) return 0;

	min = Math.min(min, ...arr);
	max = Math.max(max, ...arr);

	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	if (arr.length === 0) return 0;

	for (i = 0; i < arr.length; i +=1) {
		if (i % 2 === 0) {
			sumEvenElement += arr[i];
		}
		else {
			sumOddElement += arr[i];
		}
	}

	return differenceMaxMinWorker();
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let avg = sumEvenElement - countEvenElement;
	
	if (arr.length === 0) return 0;

	for (i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		} 
	}

	return avg;
}

function makeWork (arrOfArr, func) {

}
