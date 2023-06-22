import React from 'react'
import img1 from "../../public/a4.jpg";

const StateAbout = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
        <div class="w-full sm:p-4 px-4 mb-6">
          <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Welcome to our online store! We are passionate about bringing you a seamless and enjoyable shopping experience right from the comfort of your own home.</h1>
          <div class="leading-relaxed">At ECLICK we believe that shopping should be convenient, reliable, and inspiring. Our goal is to provide you with a wide range of high-quality products that cater to your needs and preferences. Whether you're looking for trendy fashion items, cutting-edge gadgets, home decor essentials, or unique gifts, we've got you covered.</div>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
          <p class="leading-relaxed">Subscribes</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
          <p class="leading-relaxed">Downloads</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
          <p class="leading-relaxed">Products</p>
        </div>
      </div>
      <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
        <img class="object-cover object-center w-full h-full" src={img1} alt="stats"/>
      </div>
    </div>
  </section>
    
  )
}

export default StateAbout
