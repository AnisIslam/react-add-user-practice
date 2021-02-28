import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // var Person ={
  //   name: 'Anisul Islam',
  //   job: "Student" 
  // } 
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
    { name: "Laptop", price: '$189560.99' }
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">

        <p>I am a frontend Developer</p>
        <Counter></Counter>

        <ul>
          {
            Name.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }

        {/* <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product> */}
        {
          Name.map( name=> <Person name={name} age='19' > </Person>)

        }
        

        {/* // <Person name={Name[0]} age='19' ></Person>
        // <Person name={Name[1]} age='29' ></Person>
        // <Person name={Name[2]} age='39' ></Person> */}
        

        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);

  const handleIncrease =() =>{
    const newCount = count + 1;
    setCount(newCount);

  };
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = { () => setCount(count-1)}>Decrease</button>
    </div>
  )
  
}

function Product(props) {
  const productStyle = {
    border: '2px solid gray',borderRadius: '5px',
    backgroundColor: 'lightgray',height: '200px',
    width: '200px',float: 'left',margin: '10px',padding: '10px'
  }
  // const {name ,price } = props.product;
  // console.log(name, price)
  return (
    <div style={productStyle}>
      <h2>{props.product.name} </h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>

    </div>
  )

}
function Person(parameter) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }

  return <div style={personStyle}>
    <h1>Name : {parameter.name}</h1>
    <h1>Age : {parameter.age}</h1>
    
  </div>
}

export default App;
