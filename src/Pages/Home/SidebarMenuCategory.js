import React, { useState } from 'react';
import SidebarSubmenuCategory from './SidebarSubmenuCategory';

const SidebarMenuCategory = ({ name, icon, subCategories, parentId }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };
  return (
    <li className="sidebar-menu-category">
      {!parentId && (
        <button
          className={`sidebar-accordion-menu ${isActive ? 'active' : ''}`}
          onClick={toggleAccordion}
          data-accordion-btn
        >
          <div className="menu-title-flex">
            <img src={require("../../assets/images/icons/" + icon + ".svg")} alt={icon} width={20} height={20} className="menu-title-img" />
            <p className="menu-title">{name}</p>
          </div>
          <div>
            {isActive ? (
              <ion-icon name="remove-outline" className="remove-icon md hydrated" role="img" aria-label="remove outline" />
            ) : (
              <ion-icon name="add-outline" className="add-icon md hydrated" role="img" aria-label="add outline" />
            )}
          </div>
        </button>
      )}
      
      <ul className={`sidebar-submenu-category-list  ${isActive ? 'active' : ''}`} data-accordion>
        {subCategories && subCategories.map((subcategory, index) => (
          <SidebarSubmenuCategory key={index} {...subcategory} />
        ))}
      </ul>
    </li>
  );
};

export default SidebarMenuCategory;