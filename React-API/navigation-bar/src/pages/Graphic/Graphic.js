import React from 'react';
import './Graphic.scss';
import Graph from '../../assets/Graph.png'
import UsersG from '../../assets/UsersG.png';
import NewUsersG from '../../assets/NewUsersG.png';

 function Graphic() {
    return (
        <section className="graphics">
            <div className="component-graphics">
                <img src={Graph}/>
            </div> 
            <section className="component-graphics-stadistics">
                <h2>Resume of this month:</h2>
                <img className="g-users" src={UsersG}/>
                <img className="g-new-users" src={NewUsersG}/>
            </section>
        </section>
    )
}

export default Graphic;
