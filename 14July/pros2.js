// 6. Can we change the value of the variable declared as const?
// The answer is No. However, there are some situations in which the values can be changed. This can be explained with the help of a couple of examples.

// Example 1 –

// Say we have a variable ‘iAmConstant’ declared as const and storing a value of2000.

// <br>
// const iAmConstant = 2000;<br>
// Now, if we want to update its value in the following way –

// <br>
// iAmConstant = 5000;<br>
// This won’t work and will throw a TypeError.

// Example 2 –

// If we have an object xyz having data type const.

// <br>
// const xyz = {<br>
// times: 4<br>
// }<br>
// Now if we want to assign a new value to the entire object xyz like this –

// <br>
// xyz = {<br>
// message:”Say Hello”,<br>
// times: 5<br>
// }<br>
// It will again not work because const is block-scoped and cannot be redeclared in the same scope. It will throw an error saying – TypeError: Assignment to constant variable.

// However, if we update the keys like this –

// <br>
// xyz.message = “Say Hello”;<br>
// xyz.times = 5;<br>
// The value of the object will get updated as its values are mutable and it won’t throw any error.