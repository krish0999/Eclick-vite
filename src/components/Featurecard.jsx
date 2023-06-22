import React from 'react'
import { Link } from 'react-router-dom'

const Featurecard = ({cards = [1, 2, 3]}) => {
  return (
    <section className="text-gray-600 body-font bg-zinc-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
         
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Popular Categories</h1>
        </div>
        <div className="flex flex-wrap ">
          {
            cards?.map((card) => {
              return (
                <Link to={`/categories/${card}`} className="p-4 md:w-1/4 cursor-pointer">
                  <div className="flex rounded-lg h-full bg-gray-100 p-3 flex-col text-center items-center	">
                    <div className="flex items-center mb-3">
                      
                      <h1 className="text-gray-900 text-lg title-font font-medium capitalize text-center">{card || 'Example card'}</h1>
                    </div>
                    
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Featurecard