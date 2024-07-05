// var React=require("react");
import React from "react";
// var ReactDOM=require("react-dom");
import ReactDOM from "react-dom";
//  ReactDOM.render(
//  <div>
//  <h1>helloooworld!</h1>
//  <p>this is a paragraph</p>
//  <ul>
//   <li>
//     hi
//   </li>
//  </ul>
//  </div>
//  ,document.getElementById("root"));
// //render only takes one html elements it doest not take two ie both h and p for example
// //we can overcome this by putiing that in a div which is a single element
// var h1=document.createElement("h1");
// h1.innerHTML="hello rhith";
// document.getElementById("root").appendChild(h1);

// const name="rohith";
// const currentdate=new Date();
// const year=currentdate.getFullYear();
// ReactDOM.render(
// <div>
//   <h1 className="head" contentEditable="true" spellCheck='false'>craeted {year}</h1>
// <h1>hi {Math.floor(Math.random()*10)} </h1>
// </div>
// ,document.getElementById("root"));

//how to style and attributes
// const date=new Date(2024,1,1,15);
// const curtime=date.getHours();
// let gm;
// const custom={
//   color:""
// }
// if(curtime<12){
// gm="morning";
// custom.color="red";
// }
// else if(curtime<18){
//   gm="evening";
//   custom.color="green";
// }
// else{
//   gm="night";
//   custom.color="blue";
// }

// ReactDOM.render(
//   <div>
//     <h1 style={custom}>good {gm}</h1>
//   </div>
//   ,document.getElementById("root"));
  
  //react component

// import Heading from "./heading";
// import * as cal from"./calcualtion";
// ReactDOM.render(
//   <div>
//    <ul>
//     <li>{cal.add(1,2)}</li>
//     <li>{cal.sub(9,10)}</li>
//     <li>{cal.mul(1,2)}</li>
//     <li>{cal.div(9,10)}</li>
//    </ul>
//   </div>
//   ,document.getElementById("root"));
  

//keeper app

import Appe from "./appe";
ReactDOM.render(
<div ><Appe ></Appe></div>


,document.getElementById("root"));