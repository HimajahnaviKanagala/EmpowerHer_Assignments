import React,{useState} from 'react';
function Calculator(){
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const [operation,setOperation]=useState("Add");
    const [results,setResults]=useState([]);

    function calculate(){
        const a=Number(num1);
        const b=Number(num2);

        let ans=0;
        if(operation==="Add") ans=a+b;
        if(operation==="Subtract") ans=a-b;
        if(operation==="Multiply") ans=a*b;

        setResults((prev)=>[...prev, `${operation}: ${ans}`]);
    }

    return (
        <div>
            <h2>Calculator</h2>
            <input type="number" value={num1} onChange={(e)=> setNum1(e.target.value)} placeholder="Enter first number"></input><br></br><br></br>
            <input type="number" value={num2} onChange={(e)=> setNum2(e.target.value)} placeholder='Enter second number'></input><br></br><br></br>
            <select value={operation} onChange={(e)=> setOperation(e.target.value)}>
                <option>Add</option>
                <option>Subtract</option>
                <option>Multiply</option>
            </select><br></br><br></br>
            <button onClick={calculate}>Perform Action</button>
            <h3>Results:</h3>
            <ul>
                {results.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Calculator;