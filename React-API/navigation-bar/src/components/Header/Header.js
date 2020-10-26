import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Bitmap from '../../assets/Bitmap.png'


function Header() {
    return (
        <React.Fragment>
            <section className="main-header">
                <nav className="main-header-navegation">
                    <Link to="/" className="main-header-navegation-link">Users</Link> 
                    <Link to="/newusers" className="main-header-navegation-link">New Users</Link>
                    <Link to="graphic" className="main-header-navegation-link">Graphic</Link>
                </nav>

                <section className="main-header-profile">
                    <button className="main-header-profile-button">Add New User</button>
                    <p className="main-header-profile-bell"><FontAwesomeIcon icon={faBell} /></p>
                    <img className="main-header-profile-icon" src={Bitmap}/>
                </section>
            </section>

        </React.Fragment>
    )
}

export default Header;

