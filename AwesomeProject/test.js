function Parent(x = -1, y = -2){
    this.x = x;
    this.y = y;
}

Parent.prototype.say = function(){
    console.log('say')
}

var p = new Parent();
console.dir(p);
console.log(p);
console.log(JSON.stringify(p));

console.log('\n#############\n');


function Child(){
    this.g = 90;
}

Child.prototype = new Parent();
Child.prototype.constructor=Child;

var c = new Child();
console.dir(c);
console.log(c);
console.log(JSON.stringify(c));
console.log('c instanceof Child:', c instanceof Child);
console.log('c instanceof Parent:', c instanceof Parent);


console.log('\n#############\n');


function Child2(){
    this.g = 90;
    Parent.call(this); //构造函数中的this就是当前实例
}

var c2 = new Child2();
console.dir(c2);
console.log(c2);
console.log(JSON.stringify(c2));
console.log('c2 instanceof Child:', c2 instanceof Child2);
console.log('c2 instanceof Parent:', c2 instanceof Parent);

console.log('\n#############\n');


function Child3(){
    this.g = 90;
    Parent.call(this); //构造函数中的this就是当前实例
}
Child3.prototype = new Parent();
Child3.prototype.constructor=Child3;

var c3 = new Child3();
console.dir(c3);
console.log(c3);
console.log(JSON.stringify(c3));
console.log('c3 instanceof Child:', c3 instanceof Child3);
console.log('c3 instanceof Parent:', c3 instanceof Parent);



console.log('\n#############\n');


function Child4(x, y, g){
    this.g = g;
    Parent.call(this, x, y); //构造函数中的this就是当前实例
}
Child4.prototype = new Parent();
Child4.prototype.constructor=Child4;

var c4 = new Child4(1, 2, 3);
console.dir(c4);
console.log(c4);
console.log(JSON.stringify(c4));
console.log('c4 instanceof Child:', c4 instanceof Child4);
console.log('c4 instanceof Parent:', c4 instanceof Parent);


console.log('\n#############\n');


function Child5(x, y, g){
    this.g = g;
    // Parent.call(this, x, y); //构造函数中的this就是当前实例
    Child5.prototype = new Parent(x, y);
    Child5.prototype.constructor=Child5;
}

var c5 = new Child5(1, 2, 3);
console.dir(c5);
console.log(c5);
console.log(JSON.stringify(c5));
console.log('c5 instanceof Child:', c5 instanceof Child5);
console.log('c5 instanceof Parent:', c5 instanceof Parent);
