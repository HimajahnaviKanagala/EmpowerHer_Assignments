import {useState} from 'react';
function ColorToggle(){
    const [isRed, setIsRed]=useState(true);

    return (
        <>
        <div style={{
            width:"200px",
            height:"100px",
            backgroundColor: isRed ? "red" : "blue",
            color:"white",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            marginBottom:"10px",
            fontSize:"20px",
            fontWeight:"bold",
        }}
        >
            Color Box
        </div>
        <button onClick={()=>setIsRed(!isRed)}>Change Color</button>
        </>
    );
}
export default ColorToggle;