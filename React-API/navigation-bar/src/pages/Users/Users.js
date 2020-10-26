import React from 'react'
import './Users.scss';
import UsersG from '../../assets/UsersG.png';


 function Users() {
    return (
        <div className="component-user">
            <h3>Users</h3> 
            <h4>Last month</h4>
            <h1>9,452</h1>
            <img src={UsersG} />
        </div>
    )
}

export default Users;
