import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000');
        const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE2NjE1MTA4LCJpYXQiOjE3MTY2MTQ4MDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjIyNTFjNGJiLTg5YmYtNDAzNi04YzQzLTg0YWQ1NmJkNTc2ZSIsInN1YiI6InZlbWFuYWpheWFrcmlzaG5hY2hhbmRyYUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJTcmkgVmVua2F0ZXN3YXJhIENvbGxlZ2Ugb2YgRW5naW5lZXJpbmciLCJjbGllbnRJRCI6IjIyNTFjNGJiLTg5YmYtNDAzNi04YzQzLTg0YWQ1NmJkNTc2ZSIsImNsaWVudFNlY3JldCI6IkpYVVVWSXNVZ0N0SmVYcUoiLCJvd25lck5hbWUiOiJWZW1hbmEgSmF5YSBLcmlzaG5hIGNoYW5kcmEiLCJvd25lckVtYWlsIjoidmVtYW5hamF5YWtyaXNobmFjaGFuZHJhQGdtYWlsLmNvbSIsInJvbGxObyI6IjIxQkYxQTA1SDYifQ.UTQYK7xPlU9EDo4uhTP3yNQUoIlVruYpjB2TgD7jDTw";
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Top 10 Laptops Sold on AMZ</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
