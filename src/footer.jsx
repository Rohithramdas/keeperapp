import React from "react";

function Footer(){
const cur=new Date();
const year=cur.getFullYear();

    return<footer>
    <p>
        Copyright © {year}
    </p>
    </footer> 
}

export default Footer; 