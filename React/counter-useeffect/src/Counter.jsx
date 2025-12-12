import {useState,useEffect} from 'react';
function Counter(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        if(count!==0 && count%3===0){
            alert(`The current number ${count} is divisible by 3`)
        }
    },[count]);
    return (
        <div style={{padding: "20px"}}>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
        </div>
    )

}
export default Counter;