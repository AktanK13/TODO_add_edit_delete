import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, fetchProducts } from '../../store/actions';
import { Card, List, Button, } from 'antd';

function Products({ setEditProduct }) {
  const dispatch = useDispatch();
  const products = useSelector((store => store.products));
  const isFetching = useSelector((store => store.productsFetching));


  const delProduct = (item) => {
    dispatch(deleteProduct(item.id))
    console.log('item ', item.id);
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <div>
     <h1>Products</h1>
     {isFetching && <div>Loading...</div>}
     {!isFetching && <div>
        <List
          grid={{
            gutter: 30,
            column: 1,
          }}
          dataSource={products}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.name} style={{color: "red", backgroundColor: "#e7e9eb"}}>
                {item.price} 
              <Button 
                type="ghost" 
                onClick={() => setEditProduct(item)}
              >
                Edit
              </Button> 
            <Button 
              onClick={() => delProduct(item)}
            >
              X
            </Button>
            </Card>
            </List.Item>
          )}
        />
     </div>}
    </div>
  )
}

export default Products