import React from 'react';
import Test from './components/Test';
import './App.css';
import Data from  './Data.json';
import Header from './components/Header';

function App() {
  console.log(Data);
  return (
    <div >
      <Header/>
     
    <div className='main'>
      
        {
          Data.products.map((element, key)=>{
            return(
            <Test 
            key={element.id}
            // id={element.id}
            title={element.title}
            description={element.description}
            price={element.price}
            discountPercentage={element.discountPercentage}
            rating={element.rating}
            stock={element.stock}
            brand={element.brand}
            category={element.category}
            thumbnail={element.thumbnail}
            images={element.images}
            
            />
            )

          }
          )
        }
        
        
     
    </div>
    </div>
  );
}

export default App;
