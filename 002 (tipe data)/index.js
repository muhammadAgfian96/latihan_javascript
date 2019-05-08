// var a =10;
// console.log(window.a);

var obj = {a:10 , nama : 'sandika'};

obj.halo = function() {
    console.log(this);
    console.log('halo');
}

obj.halo();

//cara 3 - constructor
function Halo(){
    console.log(this);
    console.log('cons');
}

var obj1 = new Halo();
var obj2 = new Halo();