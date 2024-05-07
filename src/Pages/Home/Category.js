import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Category() {

  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img src={require("../../assets/images/icons/dress.jpg")} alt="dress & frock" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Dress &amp; frock</h3>
                <p className="category-item-amount">(53)</p>
              </div>
              <Link to="" className="category-btn">Show all</Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={require("../../assets/images/icons/coat.jpg")} alt="winter wear" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>
                <p className="category-item-amount">(58)</p>
              </div>
              <Link to="" className="category-btn">Show all</Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={require("../../assets/images/icons/glasses.jpg")} alt="glasses & lens" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses &amp; lens</h3>
                <p className="category-item-amount">(68)</p>
              </div>
              <Link to="" className="category-btn">Show all</Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={require("../../assets/images/icons/shorts.jpg")} alt="shorts & jeans" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Shorts &amp; jeans</h3>
                <p className="category-item-amount">(84)</p>
              </div>
              <Link to="" className="category-btn">Show all</Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={require("../../assets/images/icons/tee.jpg")} alt="t-shirts" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">T-shirts</h3>
                <p className="category-item-amount">(35)</p>
              </div>
              <Link to="" className="category-btn">Show all</Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={require("../../assets/images/icons/jacket.jpg")} alt="jacket" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>
                <p className="category-item-amount">(16)</p>
              </div>
              <Link to="" className="category-btn">Show all</Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={require("../../assets/images/icons/watch.jpg")} alt="watch" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Watch</h3>
                <p className="category-item-amount">(27)</p>
              </div>
              <Link to="" className="category-btn">Show all</Link>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={require("../../assets/images/icons/hat.jpg")} alt="hat & caps" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Hat &amp; caps</h3>
                <p className="category-item-amount">(39)</p>
              </div>
              <Link to="" className="category-btn">Show all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Category
