import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";
function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const getProduts = async () => {
    setLoading(true);
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    const { data } = await response;

    setProducts(data);
    setLoading(false);
  };

  const filterProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  console.log(products);
  useEffect(() => {
    getProduts();
  }, [query]);
  return (
    <div>
      <h3>Search Products</h3>
      <div>
        <input
          type="search"
          id="search"
          placeholder="search Products"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="products">
        {loading&&<h3 style={{margin:"0 auto"}}>Loading...</h3>}
        {filterProducts.length === 0 ? (
          <h2 style={{ margin: "0 auto" }}>No products found</h2>
        ) : (
          filterProducts.map((item) => {
            return (
                <div className="product" key={item?.id}>
                  <Link to={`/product/${item?.id}`}>
                <img src={item?.image_url} alt={item?.name} />
                <div className="product-info">
                  <p>
                    <b>Name:</b> {item?.name}
                  </p>
                  <p>
                    <b>Tagline:</b> {item?.tagline}
                  </p>
                  <p>
                    <b>Description:</b> {item?.description.slice(0, 65)}...
                  </p>
                </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
    );
}

export default Products;
