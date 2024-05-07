import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewArrivals from './NewArrivals'
import Trending from './Trending'
import Dealoftheday from './Dealoftheday'
import TopRated from './TopRated'
import { GET_PAGE, GET_ID, GET_IMG } from "../../api/apiService";
function NewProducts() {
  const [products, setProducts] = useState([]);
  const [tagName, setTagName] = useState('');
  useEffect(() => {
    const fetchProductsByTagId = async () => {
      try {
        const tagId = 3; // Ví dụ: tagId là 1
        const response = await axios.get(`http://localhost:8080/product-tags/${tagId}`);

        // setProducts(response.data.slice(0, 12));
        setProducts(response.data);

        const tagResponse = await axios.get(`http://localhost:8080/tags/${tagId}`);
        setTagName(tagResponse.data.tagName);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductsByTagId();
  }, []);
  return (
    <div className="product-box">
      <div className="product-minimal">
        <NewArrivals />
        <Trending />
        <TopRated />
      </div>
      {/*
      - PRODUCT FEATURED
    */}
      <Dealoftheday />
      {/*
      - PRODUCT GRID
    */}
      <div className="product-main">
        <h2 className="title">{tagName}</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="showcase" key={product.productId}>
              <div className="showcase-banner">
                <img src={GET_IMG("galleries", product.product.galleries[0]?.thumbnail)} alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                <img src={GET_IMG("galleries", product.product.galleries[1]?.thumbnail)} alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                <p className="showcase-badge">15%</p>
                <div className="showcase-actions">
                  <button className="btn-action">
                    <ion-icon name="heart-outline" />
                  </button>
                  <button className="btn-action">
                    <ion-icon name="eye-outline" />
                  </button>
                  <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                  </button>
                  <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                  </button>
                </div>
              </div>
              <div className="showcase-content">
                <a href="#" className="showcase-category">{product.product.productCategories[0]?.category.name}</a>
                <a href="#">
                  <h3 className="showcase-title">{product.product.name}</h3>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star-outline" />
                  <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                  <p className="price">${product.product.discountPrice}.00</p>
                  <del>${product.product.regulerPrice}.00</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts
