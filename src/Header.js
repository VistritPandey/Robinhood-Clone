import React from 'react'
import Logo from './robinhood.svg'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'

function Header() {
    return (
        <div className="header">
            
            <div className="Header-logo">
                <img src={Logo} width={25} />
            </div>
            <div className="header__search">
                <div className="header__searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="Header-links">
                <a href="#" >Free Stocks</a>
                <a href="#" >Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header
