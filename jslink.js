var example=50;
console.log("Presently it is in global.");
console.log("Global value of variable example  = "+example);
var a1 = function () {
    var example=5;
    console.log(" Inside the globally defined function a1 which is called globally ");
    console.log("variable inside function a1 = "+example);
    a2();
}
function a2() {
    var example=25;
    console.log("Inside the function a2 which is defined globally but called inside the function a1.");
    console.log("Variable defined locally inside function a2 = "+example);
}
a1();
console.log("Value of variable globally = "+example);
