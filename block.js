//function encolosed with curly brackets is  a block scope
//one can access inside the block scope
function children(){
    var name = "mercykemboi"
    var name2 = "Achieng"//accessible inside the funciton
    var name4 = "Achieng"

    console.log(name)

    console.log(name2)

    console.log(name4)

} 
children()
//nested scope is a function within  the function
function num(){//parent function
    var a = 2;
    function add(){//child function
        var b = 3;
        var c = a + b;
        console.log(c);//allows it to access the variables in the parent in the child scope

    }
    add();
}
num();
//loops in js
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
for (let i = 0; i < num.length; i++){
     console.log(num[i]);//elements
     console.log(i)//index
}
//Hosting
sum()
function sum (){
    var a = 10;
    console.log(a);//calling the function before you declare
}
// strict mode allow to strictly declare the variables usinf - let, var, etc
//*find out


//ternary declarations , 
const food = ["chapati,"] //do
