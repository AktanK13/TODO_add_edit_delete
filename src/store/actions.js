import * as actions from './actionTypes';
import axios from 'axios';

const API_URL = 'http://167.99.218.30/api';

export const setFetchingProducts = () => ({
  type: actions.FETCH_PRODUCTS
});

export const setProducts = (data) => ({
  type: actions.RECEIVE_PRODUCTS,
  payload: data
});

export const fetchProducts = () => (dispatch) => {
  dispatch(setFetchingProducts());

  axios.get(`${API_URL}/products/`)
    .then(function (response) {
      dispatch(setProducts(response.data))
    })  
};

export const saveProduct = (product) => async (dispatch) => {  
  const response = await axios.post(`${API_URL}/products/create`, product);
  dispatch({
    type: actions.CREATE_PRODUCT,
    payload: response.data
  })
};

export const updateProduct = (id, product) => async (dispatch) => {  
  await axios.put(`${API_URL}/products/update/${id}/`, product);
  
  await dispatch(fetchProducts());
};

export const  deleteProduct = (id) => async (dispatch) => {  
  await axios.delete(`${API_URL}/products/delete/${id}/`);
  
  await dispatch(fetchProducts());
};
