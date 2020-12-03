import React, {useState} from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    const [contact, setContact] = useState(false)


    return (
        <React.Fragment>
        <section className="header">
            <h2 className="title-black">Telescope</h2>
        </section>
        <section className="header-info">
        <p className="about-me" onClick={()=> setContact(!contact)}> About me </p>
        {
            contact ? 
            <div className="bio" >
               <h3>Hi! I'm Sofía Lay </h3> 
               <h3>I'm Front End Dev and a aficionate photographer in my free times,
                    this are some of the things I capturate with my lens (50mm and 85mm)</h3>
            </div>
            : null
        }
        <button className="btn-contact">contact</button>
        </section>
        </React.Fragment>
    )
}
