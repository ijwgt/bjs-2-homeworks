function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

new Student("John", "male", 20);
new Student("Roman", "male", 34);

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
	if (this.hasOwnProperty("marks") === true) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function () {
	if (this.hasOwnProperty("marks") === false || this.marks.length === 0) {
		return 0;
	}
	
	const average = this.marks.reduce((acc, mark, index, arr) => {
		acc += mark;

		if (index === arr.length - 1) {
			return acc / arr.length;
		}

		return acc;
	}, 0)

	return average;
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}
