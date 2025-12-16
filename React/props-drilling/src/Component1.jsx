import Component2 from "./Component2";
function Component1(){
    const a="Apple";
    const b="Banana";
    const c="Cherry";
    const d="Date";
    const e="Elderberry";
    const f="Fig";

    return (
        <div>
            <h2>Component 1</h2>
            <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
        </div>
    );
}
export default Component1;