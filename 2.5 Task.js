class Shape{
    draw(){
        console.log("I am a simple shape");
    }
}

class Circle extends Shape{
    draw(){
        console.log("I am a circle");
    }
}

class Rectangle extends Shape{
    draw(){
        console.log("I am a rectangle");
    }
}

class Square extends Shape{
    draw(){
        console.log("I am a square");
    }
}

class ShapeFactory {
    circle = new Circle();
    rectangle = new Rectangle();
    square = new Square();
    getShape(type){
        switch(type){
            case ('circle'):
                return this.circle;
            case ('rectangle'):
                return this.rectangle;
            case ('square'):
               return this.square;
        }
    }
}

const factory = new ShapeFactory();
factory.getShape('circle').draw();

