// task 1
function parseCount(a) {
    let b = Number.parseInt(a);
    if (isNaN(b)) {
        throw new Error("Невалидное значение");
    }
    return b;
}

function validateCount(c) {
    let d;
    try {
        d = parseCount(c);
    } catch (e) {
        d = e;
    }
    return d;
}

// task 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        let area = Math.sqrt(halfPerimeter * ((halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}

const treugol = new Triangle(6, 6, 4);

console.log(treugol.getArea());