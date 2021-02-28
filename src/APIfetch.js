import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  var style = {
    color: "red",
    backgroundColor: 'white'
  }
  const Name = ["Anis", "Emon", "Iqram", 'Sadman'];
  const food = ["A", "B", "C", "D"];

  const products = [
    { name: "Photo", price: '$10.99' },
    { name: "Book", price: '$1009' },
    { name: "Phone", price: '$1560.99' },
    { name: "Laptop", price: '$1890.99' }
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">

        <p>I am a frontend Developer</p>
        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            Name.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {
          Name.map(name => <Person name={name} age='19' > </Person>)

        }

      </header>

    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);

  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Now time is : {new Date().toLocaleTimeString()}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )

}

//API calling
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));

  }, [])


  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} : {user.email}</li>)

        }

      </ul>

    </div>
  )

}

function Product(props) {
  const productStyle = {

    border: '2px solid gray', borderRadius: '5px',
    backgroundColor: 'lightgray', height: '200px',
    width: '200px', float: 'left', margin: '10px', padding: '10px'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name} </h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>


    </div>
  )

}
function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }

  return (
    <div style={personStyle}>
      <h1>Name : {props.name}</h1>
      <h1>Age : {props.age}</h1>

    </div>
  )
}

export default App;
