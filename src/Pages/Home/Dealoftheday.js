import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_PAGE, GET_ID, GET_IMG } from "../../api/apiService";

export default function Dealoftheday() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsByTagId = async () => {
            try {
                const tagId = 7; // TagId của Deal of the Day
                const response = await axios.get(`http://localhost:8080/product-tags/${tagId}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductsByTagId();
    }, []);
    return (
        <>
            <div className="product-featured">
                <h2 className="title">Deal of the day</h2>
                <div className="showcase-wrapper has-scrollbar">
                    {products.map((product) => (
                        <div className="showcase-container" key={product.productId}>
                            <div className="showcase">
                                <div className="showcase-banner">
                                    <img src={GET_IMG("galleries", product.product.galleries[0]?.thumbnail)} alt="shampoo, conditioner & facewash packs" className="showcase-img" />
                                </div>
                                <div className="showcase-content">
                                    <div className="showcase-rating">
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star-outline" />
                                        <ion-icon name="star-outline" />
                                    </div>
                                    <a href="#">
                                        <h3 className="showcase-title">{product.product.name}</h3>
                                    </a>
                                    <p className="showcase-desc">
                                        {product.product.productDescription}
                                    </p>
                                    <div className="price-box">
                                        <p className="price">${product.product.discountPrice}.00</p>
                                        <del>${product.product.regulerPrice}.00</del>
                                    </div>
                                    <button className="add-cart-btn">add to cart</button>
                                    <div className="showcase-status">
                                        <div className="wrapper">
                                            <p>
                                                already sold: <b>20</b>
                                            </p>
                                            <p>
                                                available: <b>40</b>
                                            </p>
                                        </div>
                                        <div className="showcase-status-bar" />
                                    </div>
                                    <div className="countdown-box">
                                        <p className="countdown-desc">
                                            Hurry Up! Offer ends in:
                                        </p>
                                        <div className="countdown">
                                            <div className="countdown-content">
                                                <p className="display-number">360</p>
                                                <p className="display-text">Days</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">24</p>
                                                <p className="display-text">Hours</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">59</p>
                                                <p className="display-text">Min</p>
                                            </div>
                                            <div className="countdown-content">
                                                <p className="display-number">00</p>
                                                <p className="display-text">Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div></>
    )
}
