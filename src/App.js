import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman' ,'Sakib'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier Pro', price: '$149.99'}
]
  var name = 'Mahamudul Hasan Ripath'
  var person = {
    name: "Mahamudul Hasan Ripath",
    job: "Programmer, Web Developer"
  }

  var style = {
    color:'green',
    backgroundColor:'white'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
              nayoks.map(nayok =><li>{nayok}</li>)
          }
        </ul>

        <ul>
          {
          products.map(product => <li>{product.name}</li>)
          }
        </ul>
        
        <Product products = {products[0]}></Product>
        <Product products = {products[1]}></Product>
        <Product products = {products[2]}></Product>
        <Person name = 'Mahamudul Hasan Ripath' job = 'Programmer, Web Developer'></Person>
        <Person name = 'Tanjina Sultana' job = 'Student'></Person>
        <Person name = {nayoks[0]}></Person>
        <Person name = {nayoks[1]}></Person>
        <Person name = {nayoks[2]}></Person>
        <Person name = {nayoks[3]}></Person>
        <h1>I am {name} a REACT Developer.</h1>
        <h3>I am {person.name} a {person.job}.</h3>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handelIncrease = () => setCount(count + 1);
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onMouseOver = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {handelIncrease}>Increase</button>
    </div>

  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(

    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
      {
        users.map(user => <li>{user.email}</li>)
      }
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    height: '400px',
    width: '400px',
    float: 'left'

  }

  const {name, price} = props.products;
  return(
    <div style={productStyle}>
      <h2>Name : {name}</h2>
      <h1>{price}</h1>
      <button>BUY NOW</button>

    </div>
  )
}

function Person (props){
  return (
  <div style = {{border: '5px solid white', margin:'10px', padding:'0 60px', width: '800px'}}> 
    <h1>Name: {props.name}</h1>
    <h3>Job: {props.job}</h3>
  </div>
  )
}

export default App;
