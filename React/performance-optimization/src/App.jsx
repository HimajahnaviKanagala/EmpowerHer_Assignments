import {useState, useMemo, useCallback} from 'react';
import ProductList from './components/ProductList';

const productsData = Array.from({length: 1000},(_, i) => ({
  id: i+1,
  name: `Product ${i+1}`,
  price: Math.floor(Math.random() * 100),
}));

function App(){
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  console.log("App rendered");

  const totalPrice=useMemo(()=>{
    console.log("Calculating total price...");
    return products.reduce((sum, product)=> sum+ product.price, 0);
  }, [products])

  const handleProductSelect = useCallback((product)=>{
    console.log("Selected Product:", product.name);
  },[]);

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <h2>Total Price: ${totalPrice}</h2>
      <button onClick={()=>setCounter(counter+1)}>Increment Counter ({counter})</button>

      <ProductList
        products={products}
        onSelect={handleProductSelect}
      />
    </div>
  );
}
export default App;