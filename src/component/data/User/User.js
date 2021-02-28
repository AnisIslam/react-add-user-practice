
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import userData from '../data.json'
import UserInfo from '../UserInfo/UserInfo';
import './User.css'

const User = () => {
  const [users, setUsers] = useState(userData);
  const [cart, setCart] = useState([]);


  const handleConnect = (user) => {
    console.log('added', user);
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div className='users-cart'>
      <div className='users-container'>

        {
          users.map(user => <UserInfo
            handleConnect={handleConnect}
            user={user}>{user.name}</UserInfo>)

        }

      </div>

      <div className='cart-container'>

        <Cart cart={cart}> </Cart>
      </div>


    </div>




  );
};

export default User;