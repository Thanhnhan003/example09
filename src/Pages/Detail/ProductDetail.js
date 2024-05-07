import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./style1.css"
import { GET_PAGE, GET_ID, GET_IMG } from "../../api/apiService";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    return (
        <div style={{ margin: 40 }}>
            <div className="product-detail">
                {product && (
                    <div className="product-container">
                        <div className="product-images" >
                            <div className="img-container">
                                <img src={GET_IMG("galleries", product.galleries[0]?.thumbnail)} alt={product.name} width={300}  />
                            </div>
                        </div>

                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <p>{product.productDescription}</p>
                            <p>Price: {product.discountPrice}</p>
                            <button style={{backgroundColor:"#cccccc" , padding:10}}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
