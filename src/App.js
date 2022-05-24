import {useState} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Products from './components/Products/Products';
import { Button } from "antd";
import ProductForm from './components/ProductForm/ProductForm';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [editProduct, setEditProduct] = useState(null)
  
  return (
    <div className="App">
      <Button 
        onClick={() => setShowForm((showForm) => !showForm)}
        type="primary"
      >
        ADD
      </Button>
      <div style={{display : showForm ? "block" : "none"}}>
        <ProductForm editProduct={editProduct}  />
      </div>
      <Products setEditProduct={setEditProduct} />
    </div>
  );
}

export default App;
