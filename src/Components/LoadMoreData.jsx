import React, { useEffect, useState } from "react";
import "./Style.css";
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData)=> [...prevData,...result.products]);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);
  if (loading) return <div>Loading result! Please Wait...</div>;
  if (error != null) return <div>Error Occured! {error}</div>;
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div key={item.id} className="product">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  height={150}
                  width={150}
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count+1)}>
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;
