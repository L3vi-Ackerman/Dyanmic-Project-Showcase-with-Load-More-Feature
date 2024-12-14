import React, { useEffect, useState } from "react";
import "./Style.css";
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
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
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);
  if (loading)
    return <div className="loading-div">Loading result! Please Wait...</div>;
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
                <h4>{item.title}</h4>
                <div className="extra-info">
                  <span>{item.price}$</span>
                  <span>Rating: {item.rating}</span>
                </div>
                <span className="span-description">
                  {item.description.split(/\s+/).slice(0, 10).join(" ")}
                  {item.description.split(/\s+/).length > 10 && "..."}
                </span>
                <div className="cart-div">
                  <button className="cart-btn">Add to Cart</button>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
          className="load-btn"
        >
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
