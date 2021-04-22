import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Sold Prices
            </Link>
            <Link className='option' to='/shop'>
                Calculator
            </Link>
            <Link className='option' to='/shop'>
                Map
            </Link>
            <Link className='option' to='/shop'>
                Market Insights
            </Link>
            <Link className='option' to='/shop'>
                My Searches
            </Link>
            <Link className='option' to='/shop'>
                David
            </Link>
            <Link className='option' to='/shop'>
                Menu
            </Link>
        </div>
    </div>
)

export default Header;

