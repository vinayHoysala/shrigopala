import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductsList } from './components/ProductsList';
import './mystyle.css'

class App extends Component {
  constructor(){
    super();
    this.state = {products:[],
                  searchValue : ''};
    
  };


  
  componentDidMount(){
    fetch('https://myfelight.firebaseapp.com/shriproducts.json')
      .then(response=>response.json())
      .then(items => this.setState({products:items}));
  }

  render(){
    const {products,searchValue} = this.state;
    const filteredProducts = products.filter(product=>product.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <div className='App'>
        <h1 className='shri-gopala-logo'>Shri Gopala</h1>
          <input 
                type='search'
                placeholder='search products'
                className='search-bar'
                onChange={e=> {
                  this.setState({searchValue:e.target.value});
                }} />

        <ProductsList products={filteredProducts}>    
        </ProductsList>
        
      </div>
    );
  }
}









export default App;

