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
	if (arr.length === 0) return 0;

	let sum = arr.reduce(function (currentSum, currentNumber) {
	return currentSum + currentNumber
});

	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;

	if (arr.length === 0) return 0;

	min = Math.min(min, ...arr);
	max = Math.max(max, ...arr);

	let difference = max - min;

	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	if (arr.length === 0) return 0;

	for (i = 0; i < arr.length; i +=1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		}
		else {
			sumOddElement += arr[i];
		}
	}

	let difference = sumEvenElement - sumOddElement;

	return difference;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	
	if (arr.length === 0) return 0;

	for (i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		} 
	}

	let avg = sumEvenElement / countEvenElement;

	return avg;
}

function makeWork (arrOfArr, func) {
	let maxWorkerResult = arrOfArr[0];

	if(arrOfArr.length === 0) return 0;
	
	for (i = 0; i < arrOfArr.length; i +=1) {
		const result = func(...arrOfArr);
		if (result > maxWorkerResult) {
			result = maxWorkerResult;
		}
	}
}
