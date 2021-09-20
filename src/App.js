/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}
// External users component

function ExternalUser() {
  // step 1: declare useState(initialValue)
  const [users, setUsers] = useState([]);
  // step 2: declare useEffect(function,deafultvalue)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="user__details">
      {users.map((user) => (
        <UserInfo name={user.name} email={user.email}></UserInfo>
      ))}
    </div>
  );
}

function UserInfo(props) {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h4>Email: {props.email}</h4>
    </div>
  );
}

// counter component
function Counter() {
  const [count, setcount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setcount(newCount);
  };
  const handleDecreased = () => {
    const newCount = count - 1;
    if (newCount < 0) {
      return;
    }
    setcount(newCount);
  };
  return (
    <div className="count__container">
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease} className="increase-btn">
        Increase
      </button>
      <button onClick={handleDecreased} className="increase-btn">
        Decrease
      </button>
    </div>
  );
}

function Product(props) {
  return (
    <div className="products">
      <h2>Name: {props.name}</h2>
      <h4>Brand: {props.brand}</h4>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

export default App;

/* 
  const products = [
    { name: 'Iphone', brand: 'Apple', price: 100000 },
    { name: 'One plus 8', brand: 'One plus', price: 90000 },
    { name: 'Note 8', brand: 'Samsung', price: 689000 },
  ];

*/
/* 

   {products.map((product) => (
        <Product
          name={product.name}
          brand={product.brand}
          price={product.price}
        ></Product>
      ))}

*/
