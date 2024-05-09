// class 는 template이다. 데이터가 없다.
// object는 class에 데이터를 넣으면 객체가 된다. (ES6)
/*
class Person {
    constructor(name, age) {      //filed      // constructor는 생성자
        this.name = name;
        this.age = age;
    }
    speak() {        // 메서드
        console.log(`${this.name}:hello!!`);
    }
}
const adam = new Person('홍길동', 23);
console.log(adam);
console.log(adam.name);
console.log(adam.age);
adam.speak();
 */
// Getter & Setter
/*
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
// 생성자 없이 필드를 작성하면, public, # 붙이면 private
const user1 = new User('hong', 'kil', -1);
console.log(user1.age);

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// static - static을 붙이면 클래스멤버가 된다.
// 얘네들은 클래스 이름으로 접근해야 된다.
// 각 객체마다 만들어지지 않고 공통으로 사용되는 데이터는 메서드에 사용된다.
class Article {
    static publisher = 'Dream Coding';

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPulisher() {
        console.log(Article.printPulisher);
    }
}
const article1 = new Article(1);
console.log(Article.publisher);
 */
// inheritance (상속)
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`color of drawing ${this.color}`)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {

}

const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
// overriding
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const tri = new Triangle(20, 20, 'blue');
console.log(tri.getArea());

// instanceof: 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 오브젝트인지 확인
// 모든 오브젝트들은 최상위 object를 상속한다.
console.log(tri instanceof Rectangle);
console.log(tri instanceof Triangle);
console.log(tri instanceof Shape);
console.log(tri instanceof Object);

class Counter {
    constructor() {
        this.count = 0;
    }

    increase() {
        this.count++;
        console.log(this.count);
    }
}

const colCounter = new Counter();       // new 키워드로 객체를 생성하면 constructor가 실행됨
colCounter.increase();
colCounter.increase();
colCounter.increase();

colCounter.abc = true;
console.log(colCounter.abc);