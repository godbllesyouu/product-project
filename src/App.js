import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(results => setData(results.products));
  }, []);
  const filtredProducts = data.filter((product) => product.title.toLowerCase().includes(searchTerm)); 
  return (
    <div className="App">
      <div className="product-list">
        <div className='inp'>
        <input type='text' placeholder='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        className='search-input' />
       </div>
       <div className='title-card'>
        {filtredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail}
              alt={product.title}
              className="product-image" />
            <div className="prod-title">
              <h3 href='ej.html'>{product.title}</h3>
              <p>${product.price}</p>
            </div>
            
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default App;
