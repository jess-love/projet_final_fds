import {React, useState} from 'react';
import logos from '../assets/logos/logo.png';

export const SideMenu = (props) => { 

    const [inactive, setInactive]=useState(false);
    // className={'side-menu $ { inactive ? "inactive" : "" }'
    return (
    <div className={'side-menu ${inactive ? "inactive" : ""  }'}>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logos} alt='logo' />
                </div>  
                <div onClick={()=> {
                    setInactive(!inactive);
                }}
                     className='toggle-menu-btn'>

                    <i class="bi bi-arrow-left-square-fill"></i>
                </div>          
            </div>

            <div className='search-controller'>
                <button  className='search-btn'>  
                    <i class="bi bi-search"></i>
                </button>
                <input type= 'text' placeholder='search'  />
            </div>

            <div className='divider'></div>

        </div>
    );
}

