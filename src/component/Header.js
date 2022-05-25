import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function Header() {
    return (
        <div>
            <div className='header'>
                <div className='header-left'>
                    <MenuIcon  style={{color:'#303030'}}/>
                    <span className='google'>Google</span>
                 
                    <span style={{color:"#606060"}}> My Business</span>
                </div>
                <div className='header-right'>
                    <AppsIcon  style={{color:'#303030'}}/>
                    <AccountCircleOutlinedIcon style={{color:'#303030'}} />
                </div>
            </div>
        </div>
    )
}

export default Header