import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch({ type: FETCH_DATA, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};