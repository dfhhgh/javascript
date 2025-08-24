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
// function left(num,ch) {
//       let i=1;
//   let count=0;

//   while (count<num) {

//     console.log(ch.repeat(i));
//     i+=2;
//     count++;
//   }
// }
// function right(num,ch) {
//     let i=1;
//   let count=0;

//   while (count<num) {

//     console.log(" ".repeat(num-count),ch.repeat(i));
//     i+=1;
//     count++;
//   }
// }
// function up(num,ch) {
//   let i=1;
//   let count=0;

//   while (count<num) {

//     console.log(" ".repeat(num-count),ch.repeat(i));
//     i+=2;
//     count++;
//   }
// }
// function down(num,ch){
// let count=0;
// let i=1;
// let j=1;
// while (count<num) {
//       console.log(" ".repeat(i),ch.repeat((num*2)-j));
//     i+=1;
//     count++;
//     j+=2;
  
// }
// }
// function PyramidGenerator(num,dir,ch) {
//   if (num==1) {
//     console.log(ch);
    
//   }
//   else{
//     if (dir==="right") {
//       right(num,ch);
//     }
//     else if (dir==="left") {
//             left(num,ch);

//     } 
//       else if (dir==="down") {
//             down(num,ch);

//     } 
//     else {
//       up(num,ch);
//     }


//   }
// }
// let count,direction,sympol;
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter the number of rows: ", (count) => {
//   rl.question("Enter the direction: ", (direction) => {
//     rl.question("Enter the character: ", (symbol) => {
//       PyramidGenerator(Number(count), direction, symbol);
//       rl.close();
//     });
//   });
// });
//random video 65
// function showDetails(name,age,situation) {
//    if (typeof name==="string" && typeof age==="number" && typeof situation==="boolean") {
//     console.log(`Hello ${name},your age is${age}, ${situation?"you are available for hire":"you are not available for hire"}`);
//    }

//      else if (typeof name==="boolean" && typeof age==="number" && typeof situation==="string") {
//     console.log(`Hello ${situation},your age is${age}, ${name?"you are available for hire":"you are not available for hire"}`);
//    }
//        else if (typeof name==="boolean" && typeof age==="string" && typeof situation==="number") {
//     console.log(`Hello ${age},your age is${situation}, ${name?"you are available for hire":"you are not available for hire"}`);
//    }
//      if (typeof name==="number" && typeof age==="boolean" && typeof situation==="string") {
//     console.log(`Hello ${situation},your age is${name}, ${age?"you are available for hire":"you are not available for hire"}`);
//    }

//      else if (typeof name==="string" && typeof age==="boolean" && typeof situation==="number") {
//     console.log(`Hello ${name},your age is${situation}, ${age?"you are available for hire":"you are not available for hire"}`);
//    }
//    else if (typeof name==="number" && typeof age==="string" && typeof situation==="boolean") {
//     console.log(`Hello ${age},your age is${name}, ${situation?"you are available for hire":"you are not available for hire"}`);
//    }
   

   
// }

// showDetails(true,39,"AHmed");
// showDetails(false,"Amir",22);
// showDetails("Fares",true,25);
// showDetails(25,"Adam",false);
//video 65 nested return
// function sayMessage(fname,lname){
// let mesag=`Hello`;
// function concatmsg(){
//   mesag=`${mesag} ${fname} ${lname}`;
// }
// concatmsg();
// return mesag;
// }
// console.log(sayMessage("Amir","Omran"));
//ex 2
// function sayMessage(fname,lname){
// let mesag=`Hello`;
// function concatmsg(){
//   function getFullName(){

//     return `${fname} ${lname}`;
//   }
// return  `${mesag} ${getFullName()} `;
// }

// return concatmsg();
// }
// console.log(sayMessage("Amir","Omran"));
//video 66 arrow function
// let print =(num)=>num;
// console.log(print(100));
// let print= (num1,num2)=>num2+num1;
// console.log(print(100,33));
//scope video 67
// let a=2;
// var b=1;
// console.log(`from global${a}`);
// console.log(`from global${b}`);
//68 
//var مش بتنفع مع الscope
//let بتنفع
//lexical video 69
// function parent() {
//     let a=10;
//     function child() {
//         console.log(a);
//         function grChild(params) {
//             console.log(`"from Grandchild ${}`);
            
//         }
//         grChild();
//     }
//     child();
// }
// parent();
//map video 71
//function creates new array
let myNums=[1,2,3,4,6,7,8];
let newArray=[];
for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i]+myNums[i]);
    
}
console.log(newArray);
//same idea with map take a function as a parameter
// let addself=myNums.map(function name(el,index,ar) {
//     console.log(`current el => ${el}`);
//     console.log(`current index => ${index}`);
//     console.log(`this => ${this}`);
// }, 10);
// let addself=myNums.map(function name(el,index,ar) {
//   return el+el;
// }, 10);
// console.log(addself);
///with arrow function
// let addself=myNums.map((a)=> a+a);
// console.log(addself);
//ممكن تضيف function من برة كمان للmap
// function addition(el) {
//     return el +el
// }
// let addself=myNums.map(addition);
// console.log(addself);
// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100,-30];
// let ignoreNumbers = "Elz123er40o";
// let sw=swappingCases.split("").map(function swi(element,index,arr) {
//     if (element.toLowerCase()!=element) {
//         return element.toLowerCase();
//     }
//     else
//     {
//         return element.toUpperCase();
//     }
// }).join("");
// console.log(sw);
// let inv=invertedNumbers.map(function invert(element,invert,arr) {
//     return element*-1;
// });
// console.log(inv);
// ign=ignoreNumbers.split("").map(function ignore(element,index,arr) {
//  if (isNaN(parseInt(element))) {
//     return element;
//  }
//  else 
//     ""
// }).join("");
// console.log(ign);
//filter video 73
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// // Get Even Numbers Only

// let numbers = [11, 20, 2, 5, 17,10];
// // let addmap=numbers.map(function ad(ele) {
// //     return ele +ele;
// // });
// // console.log(addmap);
// // let addfilter=numbers.filter(function ad(ele) {
// //     return ele +ele;
// // });
// // console.log(addfilter);
// //متغيرتش حاجة عشان الfilter بيرجع العنصر لو جاب true فدي فايدته
// // let filteredfriends=friends.filter(function (ele) {
// //     return ele.startsWith("A");//اختبار
// // });
// // console.log(filteredfriends);
// // let evenumbers=numbers.filter(function (ele) {
// //     return ele%2==0
// // });
// // console.log(evenumbers);
// //video 74
// let sentence = "I Love Foood Code Too Playing Much";

// let small=sentence.split(" ").filter(function (ele) {
//     return ele.length <=4;
// }).join(" ");
// console.log(small);

// //map بيرجع output
// //filter بيشيل عناصر
// let mix = "A13BS2ZX";
// let nixed=mix.split("").filter(function (ele) {
//     return !isNaN(parseInt(ele));
// }).map(function (ele) {
//     return ele*ele
// }).join("");
// console.log(nixed);
// //video 75 reduce
// let nums= [10, 20, 15, 30];

// let add=nums.reduce(function (acc, current, index ,arr ) {
//     console.log(`acc => ${acc}`);
//     console.log(`current => ${current}`);
//     console.log(`current elemnt index => ${index}`);
    
    
//     return acc+current;
// }, 5)
// console.log(add);
//acc هو اول قيمة تبدا بيها
//10 +20=30,30+15=45,45+30=75
//current العنصر اللي شغل عليه
//لو حطيت intital value هتبقي للacc
//video  76
// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test","Propaganda_two"];
// let big=theBiggest.reduce(function (acc, current, index ,arr ) {
//     console.log(`acc => ${acc}`);
//     console.log(`current => ${current}`);
    
//     return acc.length<current.length?current:acc;
// })
// console.log(big);
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "0"];
// let remove=removeChars.filter(function (ele) {
//     return ele!="@";
// }).reduce(function (acc,current,index,arr) {
//     return acc+=current;
// })
// console.log(remove);
//foreach مش بتنشأ array جديدة
//نستعتملها لو في بيانات مش عايزيين نغير فيها
// let allis=document.querySelectorAll("ul li");
// let alldivs=document.querySelectorAll(".content div");
// console.log(allis);
// allis.forEach(function (ele) {
//     ele.onclick=function () {
//         allis.forEach(function (ele) {
//             ele.classList.remove("active" )
//         })
//     this.classList.add("active");
//         alldivs.forEach(function (ele) {
//             ele.style.display = 'none';
//         })
//     };
    
// });
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = " ????? ";
// console.log(solution); // Elzero Web-School
// solution=myString.split(",").filter(function (ele,index,arr) {
//     return isNaN(parseInt(ele))&&ele!="_" ;
// }).reduce(function (acc,current,index,arr) {
//     return `${acc}${current}`
// }).slice(1,-1);
// console.log(solution);
//challenge
// let user={
//     //properties
//     theName: "AMir",
//     theAge: 48,
//     //methods
//     sayHello: function () {
//         console.log("Hello");
//     }
// };
// console.log(user.theName);
// console.log(user.theAge);

//object video 80
// let user={
//     Name: "Amir",
//     Country: "German",
// };
// video 81 nested object
// let user={
//     name: "Amigo",
//     age: 48,
//     skills: ["HTML","CSS","JS"],
//      available: false,
//      addresses: {
//         KSA:"Ryad",
//         Egypt: {
//             one: "Cairo",
//             two: "Giza",
//         }
//      },
//     checkAvailability: function () {
//             if (this.available) {
//                 return "free for work";
//             }
//             else
//             {
//                 return "not free";
//             }

//                 }

// }
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join("|"));
// console.log(user.addresses.Egypt.one);
//video 82
// let user=new Object();
// console.log(user);
// user.age=36;
// user["country"]="egypt";
// user.sayHello= function () {
//     return "Hello";
// }
// console.log(user);

// console.log(user.sayHello());
//this keyword
//  myVar= 12;//هتتعرف بvar
// console.log(this);

// console.log(this.myVar);
// function sayHello() {
//    return this;
    
// }
// sayHello();
// console.log(sayHello()=== this);
// //ازاي تعمل button
// document.getElementById("c1").onclick = function () {
//     console.log(this);
    
// };
// //this هنا عائدة علي الbutton
// let user={
//     age: 33,
//     ageInDays: function () {
//        return this.age * 365;//تعود علي الobject اللي نادي الmethod
//     },
// }
// console.log(user.ageInDays());
//video 83
// let user={
//     age: 33,
//     ageInDays: function () {
//        return this.age * 365;//تعود علي الobject اللي نادي الmethod
//     },
// }
// console.log(user.ageInDays());
// console.log(user.age);

// let obj=Object.create({});
// obj.a=100;
// console.log(obj);
// let Copyobj=Object.create(user);
// console.log(Copyobj);
// console.log(Copyobj.age);

// console.log(Copyobj.ageInDays());
// Copyobj.age=66;
// console.log(Copyobj.age);
// console.log(Copyobj.ageInDays());//عشان الuser age
// //حلها انك تستعمل this
//video 85 create object with assign method
// let obj1 = { 
// prop1: 1,
// meth1: function () {
// return this.prop1;
// },
// };
// let obj2 = {
// prop2: 2,
// meth2: function () {
// return this.prop2;
// },
// };
// let targetObject = {
// prop1: 1,
// prop3: 3,
// };
// let finalObj=Object.assign(targetObject,obj1);
// console.log(finalObj);
//DOM
//find element by id
// let myIdE= document.getElementById("my-div");
// console.log(myIdE);
// let myTagelements=document.getElementsByTagName("p") ;

// //هيجيب اكتر من عنصر
// //عشان توصل لعنصر معين تستعمل الindexing
// console.log(myTagelements[1]);
// myTagelements[1].innerHTML="TEST";
// console.log(myTagelements[1]);
// let myClassElement=document.getElementsByClassName("my-span");//class name not unique 
// console.log(myClassElement);
// //queryselector تقدر تستعمل معاها اي حاجة
// let myQueryElement=document.querySelector(".special");
// console.log(myQueryElement);
// let myQueryElementall=document.querySelectorAll(".my-span");
// console.log(myQueryElementall);
// console.log(document.title);
// console.log(document.forms[0].one.value);
// console.log(document.links[0].href);
//video 87 get and set
// let myElement=document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// //editing
// myElement.innerHTML="text from <span>Main.js</span> File";
// myElement.textContent="text from <span>Main.js</span> File";//يهتعامل معاها كمحتوي نصي بس حتي الHTML
// //images
// document.images[0].src="https://www.youtube.com/watch?v=9j9XvUnWndI&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=88"
// document.images[0].alt="alternative";
// document.images[0].title="picture";
// document.images[0].id="pic";
// document.images[0].className="Pictures";
// let myLink=document.querySelector(".Link");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));
// myLink.setAttribute("href","https://x.com");
// myLink.setAttribute("title","X");
// console.log(document.getElementsByTagName("p")[0].attributes);
// let myP=document.getElementsByTagName("p")[0];
// if (myP.hasAttribute("data-src")) { //لو في attribute بالاسم ده هيديني true
//      if (myP.getAttribute("data-src")==="") {
//         myP.removeAttribute("data-src");
//     }
//     else{
//         myP.setAttribute("data-src","new Value")
//     }

   
// }else{
//     console.log("mot found");
    
// }
// //لو حطيت hasattributes قاضية هتديك true
// if (myP.hasAttribute()) {
//     console.log("Has");
    
// }
// if (document.getElementsByTagName("div")[0].hasAttribute()) {
//     console.log("has");
    
// }
// else
//     console.log("not has");
//create elements
// let myElement=document.createElement("div");
//  console.log(myElement);
//  myElement.className="product";
//  console.log(myElement);
//  myElement.id="PR";
//  console.log(myElement);
//  let myAtt=document.createAttribute("data-src");
//  myElement.setAttributeNode(myAtt);
//  myElement.setAttribute("data-test","testing")
 
//     console.log(myElement);
//     let mytext=document.createTextNode("product one");
//     myElement.appendChild(mytext);
//     console.log(myElement);
//     document.body.appendChild(myElement );
//    let myComment=document.createComment("this is Div") ;
//    myElement.appendChild(myComment);
//practice 
// let Elm=document.createElement("div");
// Elm.className="product";
// console.log(Elm);
// let myElm2=document.createElement("h3");
// myElm2.className="Product TV";

// let myELm3=document.createElement("p");
// myELm3.className="tv specs";
// let mytex1=document.createTextNode("TV");

// let myTex2=document.createTextNode("1234*343 px");
// myELm3.appendChild(myTex2);
// myElm2.appendChild(mytex1);
// Elm.appendChild(myElm2);
// Elm.appendChild(myELm3);
//  document.body.appendChild(Elm);
// for (let i = 1; i <=100; i++) {
//    let Elm=document.createElement("div");
// Elm.className=`product ${i}`;
// console.log(Elm);
// let myElm2=document.createElement("h3");
// myElm2.className="Product TV";

// let myELm3=document.createElement("p");
// myELm3.className="tv specs";
// let mytex1=document.createTextNode( `TV${i}`);

// let myTex2=document.createTextNode("1234*343 px");
// myELm3.appendChild(myTex2);
// myElm2.appendChild(mytex1);
// Elm.appendChild(myElm2);
// Elm.appendChild(myELm3);
//  document.body.appendChild(Elm);
    
// }
//Deal with Children
