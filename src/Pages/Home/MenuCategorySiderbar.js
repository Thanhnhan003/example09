import React, { useState, useEffect } from 'react'
import SidebarMenuCategory from './SidebarMenuCategory';
import axios from "axios";
import BestSellers from './BestSellers';

function MenuCategorySiderbar() {
  const [menuData, setMenuData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/categories')
      .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="sidebar  has-scrollbar" data-mobile-menu>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline" />
          </button>
        </div>
        <ul className="sidebar-menu-category-list">
          {menuData.map((menu, index) => (
            <SidebarMenuCategory key={index} {...menu} />
          ))}
        </ul>
      </div>
      <BestSellers/>
    </div>
  )
}

export default MenuCategorySiderbar