import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Forhome = () => {
    const[state,setState]=useState(5)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=8 ')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [state])

  return (
    <div className='bg-gray-50'>
    
     
      {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Please Wait your page is loading......</div>
        
      }
       <Link to='/products'>
       <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SHOW ALL PRODUCTS</button>
        
       </Link>  
 
      
    </div>
  )
}

export default Forhome