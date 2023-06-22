import React from "react";
import img1 from "../../public/a1.jpg";
import img2 from "../../public/a2.jpg";
import img3 from "../../public/a3.jpg";
import StateAbout from "../components/StateAbout";
const About = () => {
  return (
    <>
    
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img1}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                   On Time Delhivery
                  </h1>
                  <p class="leading-relaxed mb-3">
                  We provide quality products at an affordable price
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img2}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Quality Products
                  </h1>
                  <p class="leading-relaxed mb-3">
                  We provide quality products at an affordable price
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img3}
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Lowest price all time
                  </h1>
                  <p class="leading-relaxed mb-3">
                  We provide quality products at an affordable price
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <StateAbout/>
    </>
  );
};

export default About;
