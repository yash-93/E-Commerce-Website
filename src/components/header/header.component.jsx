import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

// import { ReactComponent as Logo } from "../../assets/logo.svg";
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/" >
            <img src="https://avatars2.githubusercontent.com/u/23582791?s=400&u=eddb806106f8238ca2695ada9d9a500d12ef8729&v=4" height="60" width="60" alt="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >
                SHOP
            </Link>
            <Link className="option" to="/shop" >
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;