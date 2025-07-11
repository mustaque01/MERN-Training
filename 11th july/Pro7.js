function check(value, index){
    return value%2 === 0;
}
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr1.filter(check);
console.log(arr2);