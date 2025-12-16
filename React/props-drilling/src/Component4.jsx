import Component5 from "./Component5";

function Component4({c,d,e,f}){
    return (
        <div>
            <h2>Component 4</h2>
            <h4>This is prop c: {c}</h4>
            <h4>This is prop d: {d}</h4>
            <Component5 e={e} f={f} />
        </div>
    );
}
export default Component4;
