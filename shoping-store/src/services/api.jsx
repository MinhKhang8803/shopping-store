// services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

const api = {
    fetchProducts: () => axios.get(`${API_BASE_URL}/products`).catch(error => console.error('API error:', error)),
    checkout: (cart) => axios.post(`${API_BASE_URL}/checkout`, { productsInOrder: cart }),
    // Add more API calls as needed

};

export default api;

