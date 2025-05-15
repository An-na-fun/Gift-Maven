import { useEffect, useState } from "react";
import "./FeaturedProducts.css";
function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5050/api/featured-products")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched products:", data); // <-- Add this line
      setProducts(data);
    })
    .catch((err) => console.error("Failed to fetch products", err));
}, []);
  return (
    <section className="featured-products container">
      
        <div className="featured-products-header">
          <h2 className="title">Featured Products</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <a href={`/products/${product.id}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} width={150} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
            </a>
          ))}
        </div>

    </section>
  );
}

export default FeaturedProducts;
