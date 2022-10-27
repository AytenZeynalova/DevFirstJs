
// task1
let a1 = prompt("include first number:")
let b1 = prompt("include second number:")

let division = a1/b1;
let reminder = a1%b1;

console.log("reminder= "+reminder );
console.log("division=" +division);

// task2
let a2 = prompt("include A:")
let b2 = prompt("include B:")

let varible = a2
a2=b2
b2= varible

console.log("A =" +a2)
console.log("B =" +b2)


// task3
let a3 = prompt("include number A:")
let b3 = prompt("include number B:")
let c = prompt("include number C:")


let x1= (c-b3)/a3

console.log("value of x=" +x1)

task4
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
let num = prompt("include number :")

if(num==10){
    console.log("ten")
}
else if(num==11){
    console.log("eleven")

}
else if(num==12){
    console.log("twelve")

}else if(num==13){
    console.log("thirteen")

}else if(num==14){
    console.log("fourteen")

}else if(num==15){
    console.log("fifteen")

}else if(num==16){
    console.log("sixteen")

}else if(num==17){
    console.log("seventeen")

}else if(num==18){
    console.log("eighteen")

}else if(num==19){
    console.log("nineteen")

}else if(num==20){
    console.log("twenty")

}else if(num==21){
    console.log("twenty-one")

}else if(num==22){
    console.log("twenty-two")

}else if(num==23){
    console.log("twenty-three")

}else if(num==24){
    console.log("twenty-four")

}else if(num==25){
    console.log("twenty-five")

}else if(num==26){
    console.log("twenty-six")

}else if(num==27){
    console.log("twenty-seven")

}else if(num==28){
    console.log("twenty-eight")

}else if(num==29){
    console.log("twenty-nine")

}else if(num==30){
    console.log("thirty")

}else if(num==31){
    console.log("thirty-one")

}else if(num==32){
    console.log("thirty-two")

}else if(num==33){
    console.log("thirty-three")

}else if(num==34){
    console.log("thirty-four")

}else if(num==35){
    console.log("thirty-five")

}else if(num==36){
    console.log("thirty-six")

}else if(num==37){
    console.log("thirty-seven")

}else if(num==38){
    console.log("thirty-eight")

}else if(num==39){
    console.log("thirty-nine")

}else if(num==40){
    console.log("forty")

}else if(num==41){
    console.log("forty-one")

}else if(num==42){
    console.log("forty-two")

}else if(num==43){
    console.log("forty-three")

}else if(num==44){
    console.log("forty-four")

}else if(num==45){
    console.log("forty-five")

}else if(num==46){
    console.log("forty-six")

}else if(num==47){
    console.log("forty-seven")

}else if(num==48){
    console.log("forty-eight")

}else if(num==49){
    console.log("forty-nine")

}else if(num==50){
    console.log("fifty")

}else if(num==51){
    console.log("fifty-one")

}else if(num==52){
    console.log("fifty-two")

}else if(num==53){
    console.log("fifty-three")

}else if(num==54){
    console.log("fifty-four")

}else if(num==55){
    console.log("fifty-five")

}else if(num==56){
    console.log("fifty-six")

}else if(num==57){
    console.log("fifty-seven")

}else if(num==58){
    console.log("fifty-eight")

}else if(num==59){
    console.log("fifty-nine")

}else if(num==60){
    console.log("sixty")

}else if(num==61){
    console.log("sixty-one")

}else if(num==62){
    console.log("sixty-two")

}else if(num==63){
    console.log("sixty-three")

}else if(num==64){
    console.log("sixty-four")

}else if(num==65){
    console.log("sixty-five")

}else if(num==66){
    console.log("sixty-six")

}else if(num==67){
    console.log("sixty-seven")

}else if(num==68){
    console.log("sixty-eight")

}else if(num==69){
    console.log("sixty-nine")

}else if(num==70){
    console.log("seventy")

}else if(num==71){
    console.log("seventy-one")

}else if(num==72){
    console.log("seventy-two")

}else if(num==73){
    console.log("seventy-three")

}else if(num==74){
    console.log("seventy-four")

}else if(num==75){
    console.log("seventy-five")

}else if(num==76){
    console.log("seventy-six")

}else if(num==77){
    console.log("seventy-seven")

}else if(num==78){
    console.log("seventy-eight")

}else if(num==79){
    console.log("seventy-nine")

}else if(num==80){
    console.log("eighty")

}else if(num==81){
    console.log("eighty-one")

}else if(num==82){
    console.log("eighty-two")

}else if(num==83){
    console.log("eighty-three")

}else if(num==84){
    console.log("eighty-four")

}else if(num==85){
    console.log("eighty-five")

}else if(num==86){
    console.log("eighty-six")

}else if(num==87){
    console.log("eighty-seven")

}else if(num==88){
    console.log("eighty-eight")

}else if(num==89){
    console.log("eighty-nine")

}else if(num==90){
    console.log("ninety")

}else if(num==91){
    console.log("ninety-one")

}else if(num==92){
    console.log("ninety-two")

}else if(num==93){
    console.log("ninety-three")

}else if(num==94){
    console.log("ninety-four")

}else if(num==95){
    console.log("ninety-five")

}else if(num==96){
    console.log("ninety-six")

}else if(num==97){
    console.log("ninety-seven")

}else if(num==98){
    console.log("ninety-eight")

}else if(num==99){
    console.log("ninety-nine")

}
else{
    console.log("the number is not two digits")
}


// task7
let x= prompt("include x:")
let y= prompt("include y:")
let r= prompt("include radius:")

if(x>=0 && x<r && y>=0 && y<r){
    console.log(" point is inside a circle ")
}
else if(x<=0 && x<r && y<=0 && y<r){
    console.log(" point is inside a circle ")

}
else{
    console.log("point is not inside a circle")
}