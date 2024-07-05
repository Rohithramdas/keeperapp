import React from "react";
function Heading(){

const date=new Date(2024,1,1,15);
const curtime=date.getHours();
let gm;
const custom={
  color:""
}
if(curtime<12){
gm="morning";
custom.color="red";
}
else if(curtime<18){
  gm="evening";
  custom.color="green";
}
else{
  gm="night";
  custom.color="blue";
}

    return <div style={custom}><h1>good morining</h1><p>hi</p></div>;
  }

  export default Heading;