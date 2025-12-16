import Component3 from "./Component3";

function Component2(props){
    return (
        <div>
            <h2>Component 2</h2>
            <Component3 {...props} />
        </div>
    );
}

export default Component2;