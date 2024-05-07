import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_PAGE, GET_ID, GET_IMG } from "../../api/apiService";
export default function BestSellers() {
    const [products, setProducts] = useState([]);
    const [tagName, setTagName] = useState('');
    useEffect(() => {
        const fetchProductsByTagId = async () => {
            try {
                const tagId = 8; // Ví dụ: tagId là 1
                const response = await axios.get(`http://localhost:8080/product-tags/${tagId}`);
                setProducts(response.data.slice(0, 4));
                const tagResponse = await axios.get(`http://localhost:8080/tags/${tagId}`);
                setTagName(tagResponse.data.tagName);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductsByTagId();
    }, []);
    return (
        <>
            <div className="product-showcase">
                <h3 className="showcase-heading">{tagName}</h3>
                <div className="showcase-wrapper">
                    <div className="showcase-container">
                        {products.map((product) => (
                            <div className="showcase" key={product.productId}>
                                <a href="#" className="showcase-img-box">
                                    <img src={GET_IMG("galleries", product.product.galleries[0]?.thumbnail)} alt="baby fabric shoes" width={75} height={75} className="showcase-img" />
                                </a>
                                <div className="showcase-content">
                                    <a href="#">
                                        <h4 className="showcase-title">{product.product.name}</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                    </div>
                                    <div className="price-box">
                                        <del>${product.product.discountPrice}.00</del>
                                        <p className="price">${product.product.regulerPrice}.00</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div></>
    )
}
