import React from 'react';
import './NewUsers.scss';
import NewUsersG from '../../assets/NewUsersG.png';

function NewUsers() {
    return (
        <div className="component-new-users">
            <h3>New Users</h3> 
            <h4>Last month</h4>
            <h1>6,245</h1>
            <img src={NewUsersG} />
        </div>
    )
}
export default NewUsers;
