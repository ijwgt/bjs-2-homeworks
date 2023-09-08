function parseCount(value) {
	const num = Number.parseFloat(value);

	if (isNaN(num)) {
		throw new Error ("Невалидное значение");
	} 

	return num;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	
		if ((a + b) < c || (a + c) < b || (a + b) < c || (b + c) < a) {
			throw new Error ("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = (this.a + this.b + this.c) / 2;
		const S = Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
		return S;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
			getArea() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}
