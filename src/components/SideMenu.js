/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState} from 'react';
import logos from '../assets/logos/logo.png';
import user from '../assets/user.jpg';
import MenuItem from '../components/MenuItem';

export const SideMenu = (props) => { 

    const [inactive, setInactive]=useState(false);

    return (
    // eslint-disable-next-line no-template-curly-in-string
    <div className={`side-menu ${inactive ? "inactive" : " "  } `}> 
            <div className='top-section'>
                <div className='logo'>
                    <img src={logos} alt='logo' />
                </div>  
                <div onClick={()=>  setInactive(!inactive) }  className='toggle-menu-btn'>
                    {inactive ?(<i class="bi bi-arrow-right-square-fill"></i>): (<i class="bi bi-arrow-left-square-fill"></i>) }
                    
                </div>          
            </div>

            <div className='search-controller'>
                <button  className='search-btn'>  
                    <i class="bi bi-search"></i>
                </button>
                <input type= 'text' placeholder='search'  />
            </div>

            <div className='divider'></div>

            <div className='main-menu'>
                <ul>


                    <li>
                        <a className="menu-item">
                            <div className='menu-icon'>
                                <i class="bi bi-speedometer2"></i>
                            </div>    
                            <span>Dashboard</span> 
                        </a>
                    </li>

                    <MenuItem
                        name={"Contents"}
                        subMenus={[
                            {name: 'Games'}, {name: 'App Store'}
                            
                        ]}
                    />

                    <li>
                            <a className="menu-item">
                            <div className='menu-icon'>
                            <i class="bi bi-vector-pen"></i>
                            </div>    
                            <span>Shop By Department</span>  
                        </a>
                    </li>
                </ul>
            </div>

            <div className='side-menu-footer'>
                <div className='user'>
                    <img src={user} alt="user"/>
                </div>
                <div className='user-infos'>
                    <h5>This is my e-commerce App</h5>
                    <p>e-commerce@gmail.com</p>
                </div>
            </div>

        </div>
    );
}

