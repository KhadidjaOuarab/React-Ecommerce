import { useState } from 'react'
import Product from './Component/Product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const [solde, setSolde] = useState(0)
  const [panier, setPanier] = useState(0)
  

  const printValue = (price) =>{
    // e.preventDefault()
    console.log('====================================');
    console.log(price);
    console.log('====================================');
    setPanier(panier + 1)
    setSolde(solde + parseInt(price) )
  }
 
  return (

    <>
    <div>
      <h1 className='center'>Ecommerce Site Web</h1>
      <p className='right'>Solde : {solde}</p>
      <p className='right'>Panier : {panier}</p>
    
    </div>
    <div className="grid">
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
    <Product printValue={printValue}  productName='Pc portable MacBook 2020' price='122'/>
   </div>
   </>
  )
}

export default App
