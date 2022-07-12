//boolean returns true or false

// how to check undefined value
// Undefined means a variable has been declared but has not yet been assigned a value.
// Null is an assignment value. It can be assigned to a variable as a representation of no value
function isDefined(e){
    if (e === undefined ){
        return "undefined value";
    }
    return e


}
let c;
console.log(isDefined(c));

function test(t) {
    if (t === undefined) {
      return 'Undefined value!';
    }
    return t;
  }
  
  let x;
  
  console.log(test(x));
//check type of in undefined value
(function() {

    const undefined = 'foo';
    console.log(undefined, typeof undefined);
})();

//null value 
function testNull() {
    let y = null;
    console.log(y);

}
testNull();

// Undefined usually means a variable has been declared, but not defined.
// null === undefined   = false
// null  == undefined   = true
function testUndefined() {

    let r;
    console.log(r)
}
testUndefined();
// when checking the value of a key in undefined
function checkingUndefined() {
    let object = {};
    console.log(object.value)
}
checkingUndefined();



