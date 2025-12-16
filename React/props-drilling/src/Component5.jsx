import Component6 from "./Component6";

function Component5({e,f}){
    return (
        <div>
            <h2>Component 5</h2>
            <h4>This is prop f: {f}</h4>
            <Component6 e={e} />
        </div>
    );
}
export default Component5;