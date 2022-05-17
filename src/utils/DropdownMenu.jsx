import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { connect } from 'react-redux';
import { getCategoryProducts } from '../redux/actions/categoryActions';
import classes from './DropdownMenu.module.css'

const DropdownMenu = (props) => {
  const handleCategoryChange = (categoryId) => {
    props.getCategoryProducts(categoryId);
  }
  return (
    <div className={classes.dropdownmenu}>
      <ul className={classes.menu__collection}>
        {
          props.categoryItems.map(item => 
              <li className={classes.menu__item} onClick={() => handleCategoryChange(item?.id)}>
                {item.title} 
                <ul className={classes.submenu__collection}>
                  {
                    item.subcategories.map(subitem => 
                      <li className={classes.submenu__item}><p>{subitem}</p> <FiChevronRight/> </li>  
                    )
                  }
                </ul>
              </li>
          )
        }
      </ul>
    </div>
  )
}

export default connect(null, {getCategoryProducts}) (DropdownMenu)
