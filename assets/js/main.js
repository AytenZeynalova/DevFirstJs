
// task1
let a1 = prompt("include first number:")
let b1 = prompt("include second number:")

let division = a1/b1;
console.log(division);

// task2
let a2 = prompt("include A:")
let b2 = prompt("include B:")

let varible = a2
a2=b2
b2= x

console.log("A =" +a2)
console.log("B =" +b2)


// task3
let a3 = prompt("include number A:")
let b3 = prompt("include number B:")
let c = prompt("include number C:")


let x= (c-b3)/a3

console.log("value of x=" +x)

// task4
let a4 = prompt("include number A:")
let b4 = prompt("include number B:")

if(a4>b4){
    console.log("A+B=" +(a4+b4))
}
else if(a4==b4){
    console.log("A*B=" +(a4*b4))

}
else if(a4<b4){
    console.log("A-B=" +(a4-b4))

}


// task5
let a5 = prompt("include number A:")
let b5 = prompt("include number B:")
let c2 = prompt("include number C:")

let discriminant= b5*b5-4*a5*c2
let root1, root2;

if(discriminant>0){
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if(discriminant==0){
    root1 = root2 = -b / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if(discriminant<0){
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}


// task6
