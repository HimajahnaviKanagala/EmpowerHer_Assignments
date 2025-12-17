import {useContext} from "react";
import { AppContext } from "./context/AppContext";

function Component6(){
    const {e} = useContext(AppContext);
    return (
        <div>
            <h2>Component 6</h2>
            <h4>This is prop e: {e}</h4>
        </div>
    );
}

export default Component6;