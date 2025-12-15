import {useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function StatusToggle(){
    const[status, setStatus]=useState(false);

    return (
        <div>
            {status? <ComponentA/>:<ComponentB/>}
            <button onClick={()=>setStatus(!status)}>
                Toogle Status
            </button>
            
        </div>
    );
}
export default StatusToggle;