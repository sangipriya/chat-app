class circle{
    constructor(color,radius){

        this .color=color;
        this.radius=radius;
    }

    getColor(color){
        this.color=color;
    }
    getRadius(radius){
        this.radius=radius;
    }
    setColor(){
        return this.color;
    }

    setRadius(){
        return this.radius;
    }
    getArea(){
        let area=(3.14*this.getRadius()*this.getRadius()).toFixed(2)
        return area;
    }
    getCircumference(){
        let cir=(2*3.14*this.getRadius().tofixed(2))
        return cir;
    }
    display(){
        let str=`[Radius:${this.getRadius()}] ,[Color: ${this.getColor()}]`;
        return str;
    }

}

let circle1=new circle();
let circle2=new circle("red")
let circle3=new circle(3,"green")
circle1.setRadius(6)
circle1.setColor("white")
circle2.setRadius(9)
console.log(circle1.display())
console.log(circle2.display())
console.log(circle3.getArea())
console.log(circle3.getCircumference())