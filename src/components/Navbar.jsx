import React from 'react'
import Button from './Button/Button';
import Twitter from './twitters/Twitter';
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <h1 className='logo'>
                            <a href='https://t.me/cryptoitachicalls' target='_blank'>ITACHI</a>
                        </h1>
                    </div>

                    <Twitter />
                    <Button placeholder='VISIT LOUNGE' href="https://t.me/cryptoitachi_lounge" />
                </div>
            </div>
        </>
    )
}

export default Navbar;