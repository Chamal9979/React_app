import {useState} from "react";

function Footer(){
    //i want to add + button , value and - button
    let[value,setValue]=useState(0);

    function sub(){
        setValue(value<=0?0:--value)

    }
    function add(){
        setValue(++value)
    }

    return(
        <div style={{padding:"5rem",margin:"5rem",display:"flex"}} className="text-3xl">
            <button style={{marginRight:"1rem"}} onClick={add}>+</button>
            <h1>{value}</h1>
            <button style={{marginLeft:"1rem"}} onClick={sub}>-</button>
        </div>

    )
}


export default Footer;