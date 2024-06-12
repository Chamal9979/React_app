import {useState} from "react";

function Footer(){
    let[value , setvalue]= useState(0)

    function decrementValue() {
       setvalue(value <= 0 ? 0 : --value)
    }
    function incrementValue() {
       setvalue(++value)
    }

    return(
        <div style={{padding: '5rem', margin: '5rem', display: 'flex'}} className="text-9xl">
            <button style={{marginRight:'5rem'}} onClick={decrementValue}>-</button>
            <h1>{value}</h1>
            <button style={{marginLeft:'5rem'}} onClick={incrementValue}>+</button>
        </div>
    )
}
//efhuwhfiwhef

export default Footer;