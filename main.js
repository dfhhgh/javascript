//ctrl + /
// window.alert("hello");
// document.writeln("<h1> hello</h1>");
console.log("hello");
//styling
console.log("%cAmigo", "color: red; font-size:100px");
//don't forget %c before the sentence you need
//if you want specific words %c word %c
//************************************************************************** */
//ECMA
// console.log(typeof 500.3);
// console.log(typeof ["asd","sdsa"]);
// console.log(typeof {name: "Amigo" , age:14 , country: "EG"});
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// var user="Yammmi";
// var name="amsd",age=21;
// console.log(Hello);
//************************************** */
//redec;are
//var
//let
//const
// console.log("sad 'dada' \\");
/************************ */
//concatenation
// let a="Amigo";
// let b="Man";
// document.writeln(a + " " +b);
/********************* */
//etma
// console.log(`${a} "" '' / \\`);
//عشان تعملها دوس حرف الذال
/************* */
//markup
/*
let Title="AMigo"
let markup=`
<div class='card'>

<div class="child">
<h2>${Title}<\h2>
<p>paragraph</p>
</div>
</div>`
document.writeln(markup);
*/
/**************** */
//challenge
// var Title="Elzero",Description='ELzzero web school',Datecontent="25/10";
// let markup=`
// <div class='card'>
// <div class='child'>
// <h1>${Title}</h1>
// <p>${Description}</p>
// <Date>${Datecontent}</Date>

// </div>
// </div>
// `;

// document.writeln(markup.repeat(4));
/******** */
//exponential
// console.log(2**3);
/**************** */
//unary plus return number even if it is not number
// console.log(+"222");
// console.log(+"www");
// console.log(-"222");
// console.log(+"");
/*********** */
// let a=10;
// console.log(a);
// a+=20;
// console.log(a);
// ;
//challenge 2]
// let d="-100";
// let e="20";
// let f=30;
// let g=true;
// console.log(-d * e);
// console.log(++e * ++g + ++f + -d);

/******* ***************************/
//Number
// console.log(1_000_000);
// console.log(1e6);
// console.log(10**6);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
/******************************* */
//number methods
// console.log(100..toString());
// console.log(100.5555.toFixed(2));
// console.log(parseInt("100.333"));
// console.log(parseFloat("100.332"));
/*********************************** */
//Math
// console.log(Math.round(99.3));
// console.log(Math.ceil(99.6));
// console.log(Math.floor(89.2));
// let rr=[];
// console.log(Math.min(10,20,30,423,300,600));
// console.log(Math.max(10,20,30,423,300,600));
// //trunc بيشيل الكسور
// console.log(Math.trunc(99.4));

/************************************************** */
//challenge 26 video
// let a=1_00,b=2_00.5,c=1e2,d=2.4;
// console.log(Math.trunc(Math.min(a,b,c,d)));
/***************************************************** */
//video 27 strings
// let a=" Amigo "
// console.log(a.charAt(0));
// console.log(a[4]);

// console.log(a.length);
// console.log(a.trim());

// console.log(a.toUpperCase());
// console.log(  a.trim().charAt(2).toUpperCase());
/**************************************************** */
//video 28 strings p2
// let a="Amigo Man";
// console.log(a.indexOf("Man",7));
// console.log(a.lastIndexOf("Man"));
// //slice start end
// console.log(a.slice(1,4)
// );
// console.log(a.slice(-6));
// //<= 
// console.log(a.slice(-5.-3));
// //split
// console.log(a.split(" "));
// //يعني قصقص علي حسب المسافة
/************************************************ *********/
//video 29 strings p3g(7
// let a="AMigo Man OX";

// console.log(a.substring(7,3));

// console.log(a.substring(-6));
// console.log(a.substring(-7,1));
// //substr
// //include
// console.log(a.includes("OX"));
// //endsWith lenght not index
// console.log(a.endsWith("X"));
// //challenge
// console.log(a.charAt(0).toLowerCase() + a.substring(1,a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase() );
// console.log();
/************************************************************************************************************************************ */
//comparisions
// == بنقارن الvalue بس مش نو ع البيانات
// console.log(10!="10");
// console.log(100=="100");
// //=== identical بيقارن القيمة ونوع البيانات
// //!== not identical 
// console.log(10!=="10");
//ternary operator
// let Name="Ahmed";
// let Gender="Male";
// let age=22;
// if (Gender=="Male") 
//     {
//         console.log("MR")
    
// }
// else{
//    console.log("MS") ;

// }
// let result=Gender==="Male"?"Mr":"MS";
// console.log(`Hello ${Gender==="Male"?"Mr":"MS"} ${Name}`);
/***************************************************************** */
//36 video
//nullish operator ??
//if challenge
// let ss="Elzero Web School";
// if (ss.includes("w")) {
//     console.log("Good");
    
// }
//37
//switch
// let date=22;
// switch (date) {
//     case 22:
//         console.log("Monday");
        
//         break;

//     default:
//         console.log("unknown")
//         break;
// }
//array
// let friends=["Amir","Mohamed","Hassan"];
// console.log(friends[0]);
// //طب لو عايز اوصل لجرف معين فعنصر من العناصر
// console.log(friends[0][1]);
// //nested array
// let myfirends=["Amir","Mohamed","Hassan",["Mohamed","Yami"]];

// console.log(myfirends[3][1]);
// //طب لو عايز حرف معين
// console.log(myfirends[3][1][0]);
// //editing
// myfirends[3]="Omran";
// console.log(myfirends);
// console.log(myfirends);
//lenght
// let myfirends=["Amir","Mohamed","Hassan"];
// console.log(myfirends.length);
// myfirends[4]="Gamal";
// console.log(myfirends.length);
//42 video
// let myfirends=["Amir","Mohamed","Hassan"];
// myfirends.unshift("Yugi","Yoo");
// //اضافة عناصر في بداية المصفوفة
// console.log(myfirends);
// //اضافة عناصر في نهاية المصفوفة
// myfirends.push("Amigo");
// console.log(myfirends);
// myfirends.shift();//remove first element
// console.log(myfirends);
// myfirends.pop();
// console.log(myfirends);
//find index
// let myfirends=["Amir","Mohamed","Hassan"];
// console.log(myfirends.indexOf("Mohamed"));
//if not found returns -1
//sorting
// let myfirends=["Amir","Mohamed","Hassan",12,22,30];
// console.log(myfirends.sort());
// console.log(myfirends.reverse());
//slicing
let myfirends=[1,2,"Amir","Mohamed","Hassan","Samer"];
// console.log(myfirends.slice(1,5));
//slice => create a new array
//splice تحذف او تضيف
//start,number deleted elements,the new elements 
// myfirends.splice(0,0,"Sameer");
// console.log(myfirends);
// myfirends.splice(0,1);
// console.log(myfirends);
//46 video
//joining array
// let newfriends=["Hesham","Hussien","Shady"];
// let allfriends=myfirends.concat(newfriends,"Gamal","Osama");
// console.log(allfriends);
// //join
// console.log(allfriends.join(" @ "));
//loops
// for (let index = 0; index < myfirends.length; index++) {
//    console.log(myfirends[index]);
   
// }
// //ازاي نتاكد من النوع؟
// let names=[];
// for (let index = 0; index < myfirends.length; index++) {
//    if (typeof myfirends[index] === "string") {
//     names.push(myfirends[index]);
// }
    
// }
// console.log(names);
//label
let products=["keyboard","Mouse","Pen","Monitor","Headphone"];
let color=["RED","GREEN","Blue"];
// Mainloop:for (let index = 0; index < products.length; index++) {
//    console.log(products[index]);
//    nestedloop:for (let j = 0; j < color.length; j++) {
//     console.log(color[j]);
//     if (color[j]=="GREEN") {
//         break Mainloop;
//     }
    
//    }
   
    
// }
//video 53
// let showcount=4;
// document.writeln(`<h1>show ${showcount} products </h1>`);
// for (let index = 0; index < showcount; index++) {
//     document.writeln(`<div>`);

//    document.writeln(`<h3> ${index+1}.${products[index]}</h3>`);
//    for (let j = 0; j < color.length; j++) {
// document.writeln(`<p>${color[j]}</p>`)
    
//    }
//    document.writeln(`</div>`);
// }
//55 video
//do while
// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// let k=0;
// while (myAdmins[k]!="Stop") {
//     k++;
// }
// document.writeln(`<div>We Have ${k} Admins</div>`);
// for (let i = 0; i < myAdmins.length; i++) {
//    if (myAdmins[i]=="Stop") {
//      break;
//    }
//     document.writeln(`<h3>The Admin for Team${i+1} is ${myAdmins[i]}</h3>`);
//     document.writeln(`<h1> Team members</h1>`);
// let num=0;
// for (let j = 0; j < myEmployees.length; j++) {

//     if (myEmployees[j].startsWith(myAdmins[i][0])) {
//         num++;
//         document.writeln(`<h2>-${num} ${myEmployees[j]}</h2>`);
//     }
// }
    
// }
//functions
// function SayHello(userNAme){

//     return `hello ${userNAme}`;
    
// }
// let result=SayHello("Amir");
// console.log(result);

// function generateyears(start,end,exclude){

// for (let index = start; index <= end; index++) {
//     if (index==exclude) {
//         continue;
//     }
//     console.log(index);
    
    
// }
// }
// generateyears(1967,1977,1973);
//problems
// function distinct() {
//     let size = Number(prompt());
//     let arr = [];
//     for (let index = 0; index < size; index++) {
//         arr.push(Number(prompt()));
//     }
//   arr.sort();
//   let count=1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i]==arr[i-1]) {
//         continue;
//     }
//     else{
//         count++;
//     }
    
//   }
//   console.log(count);
  
// }
// distinct();
//M problem
// 
//default

// function SayHello(userNAme,age="Unkown"){
//   // if (age=== undefined) {
//   //   age="unkown";
//   // }

//     return `hello ${userNAme}`;
    
// }
//rest parameters
//undetermined number of parametse ...
// function calc(...numbers){
//   console.log(Array.isArray(numbers));
//   let result=0;
//   for (let i = 0; i < numbers.length; i++) {
   
//     result+=numbers[i];
//   }
   
// }
// calc(20,22,30,40,50,51);
//video 62
function left(num,ch) {
      let i=1;
  let count=0;

  while (count<num) {

    console.log(ch.repeat(i));
    i+=2;
    count++;
  }
}
function right(num,ch) {
    let i=1;
  let count=0;

  while (count<num) {

    console.log(" ".repeat(num-count),ch.repeat(i));
    i+=1;
    count++;
  }
}
function up(num,ch) {
  let i=1;
  let count=0;

  while (count<num) {

    console.log(" ".repeat(num-count),ch.repeat(i));
    i+=2;
    count++;
  }
}
function down(num,ch){
let count=0;
let i=1;
let j=1;
while (count<num) {
      console.log(" ".repeat(i),ch.repeat((num*2)-j));
    i+=1;
    count++;
    j+=2;
  
}
}
function PyramidGenerator(num,dir,ch) {
  if (num==1) {
    console.log(ch);
    
  }
  else{
    if (dir==="right") {
      right(num,ch);
    }
    else if (dir==="left") {
            left(num,ch);

    } 
      else if (dir==="down") {
            down(num,ch);

    } 
    else {
      up(num,ch);
    }


  }
}
let count,direction,sympol;
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number of rows: ", (count) => {
  rl.question("Enter the direction: ", (direction) => {
    rl.question("Enter the character: ", (symbol) => {
      PyramidGenerator(Number(count), direction, symbol);
      rl.close();
    });
  });
});

