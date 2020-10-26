import React from 'react';
import './Premium.scss';
import Sword from '../../assets/Sword.png'

function Premium() {
    return (
        <div className="main-premium">
            <img src={Sword} />
            <p>Upgrade to PRO to unlock more features</p>
            <button>UPGRADE</button>
        </div>
    )
}

export default Premium;
