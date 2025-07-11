//var let const
function test() {
    let a = 10;
    var b = 20;
    console.log("before block a:", a ," b:", b);
    {
        let a = 30;
        var b = 40;
        console.log("inside block a:", a, " b:", b);
    }
    console.log("after block a:", a, " b:", b);
}Pro1.JSON.stringify(obj);