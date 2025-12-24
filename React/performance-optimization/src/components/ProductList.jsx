function ProductList({products, onSelect}){
    console.log("ProductList rendered");

    return (
        <div>
            <h3>Product List</h3>
            <ul>
                {products.slice(0,10).map((product)=>(
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={()=>onSelect(product)}>Select</button>
                    </li>
                ))}
            </ul>
            <p>(Showing first 10 products)</p>
        </div>
    );
}
export default ProductList;