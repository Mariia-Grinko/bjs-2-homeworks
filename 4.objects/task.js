function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
const studentP = new Student("Petrov");
const studentS = new Student("Sidorov");
const studentI = new Student("Ivanov");

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}
Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}
Student.prototype.addMarks = function(...rest) {
    for (let i = 0; i < rest.length; i++) {
        this.addMark(rest[i]);
    }
}

Student.prototype.getAverage = function() {
    let sum = 0;
    sum = marks.map((element) => { return sum + element; });
    return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
    delete Student.subject;
    delete Student.marks;
    this.excluded = reason;
}