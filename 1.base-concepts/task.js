"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let D = Math.pow(b, 2) - 4 * a * c;

	if (D === 0) {
		D = -b / (2 * a);
		arr.push(D);
	} else if (D > 0) {
		let D1 = (-b + Math.sqrt(D)) / (2 * a);
		let D2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(D1, D2);
	} else {
		D = false;
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyInterestRate = percent / 100 / 12;
	let loanBody = amount - contribution;
	let monthlyLoanPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / (((1 + monthlyInterestRate) ** countMonths) - 1)));
	let result = +(monthlyLoanPayment * countMonths).toFixed(2);

	return result;
}

