import { AppContext } from "./context/AppContext";
import Component2 from "./Component2";

function Component1(){
    const contextValues={
        a: "Hello from Component 1",
        b: "Welcome to context API",
        c: "Enjoy Learning React",
        d: "Props Drilling is Solved",
        e: "Have a great day!",
        f: "Keep Coding!"
    };

    return (
        <div>
            <AppContext.Provider value={contextValues}>
                <h2>Component 1</h2>
                <Component2 />
            </AppContext.Provider>
        </div>
    )
} 
export default Component1;