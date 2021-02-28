import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart.email);

    let total = 0;
    // let email = [];
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        // email = email+ user.email;

        const salary = user.salary.replace(/[^\d.-]/g, '');
        total = Number(total) + Number(salary);
        

    }

    return (
        <div>
            <h4>Connected Friends: {cart.length}</h4>
          
            <p>Total salary : {Math.round(total)}</p>
            <p>You can add more {15-cart.length} people.</p>
        </div>
    );
};

export default Cart;