import React from 'react'
import Logo from './robinhood.svg'
import SearchIcon from '@material-ui/icons/Search'
//import './Header.css'

function Header() {
    return (
        <div className="header__wrapper">
            {/* Logo */}
            <div className="header__logo">
                <img src={Logo} width={25} />
            </div>
            <div className="header__search">
                <div className="header__searchContainer">
                    <SearchIcon/>
                    <input placeholder="Search" type="text" />
                </div>
            </div>
        </div>
    )
}

export default Header
