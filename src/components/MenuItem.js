/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const MenuItem = (props) => {
    const {name, subMenus} =props;

    return (
        <li>
        <a className="menu-item">
            <div className='menu-icon'>
            <i class="bi bi-newspaper"></i>
            </div>    
            <span>{name}</span> 
        </a>
        {
            subMenus && subMenus.lenght > 0 ? 
            (<ul className="sub-menu">
    
                {subMenus.map((menu, index) => (
                    <li> key={index}
                    <a>{menu.name}</a>
                </li>
                ))}
                
                <li>
                    <a>App Store</a>
                </li>
             </ul>) : null}
        

    </li>
    );
}

export default MenuItem;
