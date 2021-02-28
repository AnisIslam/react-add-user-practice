import React from 'react';
import './UserInfo.css'

const UserInfo = (props) => {
  const { name, image, email, phone, salary } = props.user;

    // console.log(props);
    return (
        <div className='user' >


            <div>
                <img src= {image}alt=""/>

            </div>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{salary}</p>
                <button 
                className= 'connect-button' 
                onClick={()=> props.handleConnect(props.user)}>
                    Connect Here
                    </button>

            </div>

        </div>
    );
};

export default UserInfo;