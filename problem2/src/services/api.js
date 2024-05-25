import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (companyName, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${BASE_URL}/companies/${companyName}/categories/${category}/products`, {
      params: { top, minPrice, maxPrice },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
