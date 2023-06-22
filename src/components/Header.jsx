import React from 'react'
import { Link } from 'react-router-dom'

const navigations = [
  { id:1,
    name: 'Home',
    path: '/'
  },
  {
    id:2,name: 'Products',
    path: '/products'
  },
  {id:3,
    name: 'About',
    path: '/about'
  },
  {id:4,
    name: 'Contact',
    path: '/contact'
  }
]

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg bg-orange-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
          <span className="ml-3 text-xl mainlogo">Eclick</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation,index) => {
                
              return (
                <div key={index} >

                <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
                </div>
              )
            })
          }
        </nav>
        <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go to Cart
         
        </Link>
      </div>
    </header>
  )
}

export default Header