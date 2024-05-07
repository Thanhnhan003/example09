import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_PAGE, GET_ID, GET_IMG } from "../../api/apiService";
export default function TopRated() {
    const [products, setProducts] = useState([]);
    const [tagName, setTagName] = useState('');
    useEffect(() => {
        const fetchProductsByTagId = async () => {
            try {
                const tagId = 6; // Ví dụ: tagId là 1
                const response = await axios.get(`http://localhost:8080/product-tags/${tagId}`);
                setProducts(response.data);
                const tagResponse = await axios.get(`http://localhost:8080/tags/${tagId}`);
                setTagName(tagResponse.data.tagName);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductsByTagId();
    }, []);

    const renderShowcaseContainers = () => {
        const containers = [];
        const productsChunks = chunkArray(products, 4); // Chia mảng thành các phần tử con chứa tối đa 4 sản phẩm
        productsChunks.forEach((chunk, index) => {
            containers.push(
                <div className="showcase-container" key={index}>
                    {chunk.map((product) => (
                        <div className="showcase" key={product.productId}>
                            <a href="#" className="showcase-img-box">
                            <img src={GET_IMG("galleries", product.product.galleries[0]?.thumbnail)} alt="Product Thumbnail" className="showcase-img" width={70} />
                                {/* <img src={require("../../assets/images/products/party-wear-1.jpg")} alt="womens party wear shoes" className="showcase-img" width={70} /> */}
                            </a>
                            <div className="showcase-content">
                                <a href="#">
                                    <h4 className="showcase-title">{product.product.name}</h4>
                                </a>
                                <a href="#" className="showcase-category">Party wear</a>
                                <div className="price-box">
                                    <p className="price">${product.product.regulerPrice}.00</p>
                                    <del>${product.product.discountPrice}.00</del>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        });
        return containers;
    };

    return (
        <div className="product-showcase">
            <h2 className="title">{tagName}</h2>
            <div className="showcase-wrapper has-scrollbar">
                {renderShowcaseContainers()}
            </div>
        </div>
    );
}

// Hàm hỗ trợ chia mảng thành các phần tử con
function chunkArray(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
}
