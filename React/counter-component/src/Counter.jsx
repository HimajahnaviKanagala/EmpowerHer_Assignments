import React,{useState} from "react";
function Counter(){
    const[num,setNum]=useState(0);
    const increment=()=>{
        setNum(num+1);
    }
    return (
        <div>
            <h3>Num:{num}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    )

}
export default Counter;