import './App.css';
import { useState } from 'react';

function App() {
  //create shopping items as array of objects
  const shoppingItems = [
    {
      name: 'Fancy Product',
      price: '$40.00 - $80.00'
    },
    {
      name: 'Special Item',
      price: '$18.00'
    },
    {
      name: 'Sale Item',
      price: '$25.00'
    },
    {
      name: 'Popular Item',
      price: '$40.00'
    },
    {
      name: 'Sale Item',
      price: '$25.00'
    },
    {
      name: 'Fancy Product',
      price: '$120.00 - $280.00'
    },
    {
      name: 'Special Item',
      price: '$18.00'
    },
    {
      name: 'Popular Item',
      price: '$40.00'
    },

]

  const [count,setCount] = useState(0);  //count used to count full basket
  
  return (
    <div >
      <FullCart count={count} setCount={setCount}/>   {/* Full count button component */}     
    <div className="App">
     
     {shoppingItems.map((Itm,key) => <Card name={Itm.name} price={Itm.price} key={key} setCount={setCount} count={count}/>)}
    
    </div>
    </div>
  );
}

function FullCart({count,setCount}){                                           //full cart button at top 
 
  return <button className='btn btn-outline-dark full-cart' type="submit">
  <i className="bi-cart-fill me-1"></i>
  Cart
  <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
</button>
}


function Card({name,price,count,setCount}){      //all cards rendered
  const [show,setShow] = useState(false);
  const styles = {display: show ? 'block': 'none'}
  
  
  return <div className="card ">
                    
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
               
                            <div className="card-body">
                                <div class="text-center">
                     
                                    <h5 className="fw-bolder">{name}</h5>
                        
                                    {price}

                                </div>
                            </div>
                            <div className='buttons'>
                            <button disabled={show}  onClick={()=> {
                                setCount(count+1);                            //set count value by adding 1
                                setShow(true);

                            } } className="btn btn-outline-dark add">Add to cart</button>
                           <button style={styles} className="btn btn-outline-dark add" onClick={() => {
                                setCount(count-1);                             //set count value by removing 1 on click of remove button
                                setShow(false);                                
                           }}>Remove</button>
                           </div>
                          </div>
              
}


export default App;
