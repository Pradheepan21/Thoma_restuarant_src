<<<<<<< HEAD
import React from "react";

const AboutItem = ({ id, image, icon, title, description }) => {
  return (
    <div className="bg-white transform transition duration-700 hover:scale-105 p-4 sm:p-6 rounded-2xl hover:shadow-xl">
      {/* image  */}
      <div className="overflow-hidden rounded-2xl flex flex-grow">
        <img
          className="transform transition duration-700 hover:scale-125 w-full"
          src={image}
          alt={title}
        />
      </div>
      {/* other info  */}
      <div className="flex mt-4 sm:mt-6 space-x-3">
        {/* icon  */}
        <div>
          <img src={icon} alt={title} className="w-24 sm:w-36" />
        </div>
        {/* description  */}
        <div className="flex flex-col space-y-2 sm:space-y-3">
          <h1 className="text-lg sm:text-xl text-gray-800 poppins">{title}</h1>
          <p className="text-xs sm:text-sm text-gray-500 poppins">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
=======
import React from 'react';

const AboutItem = ({ id, image, icon, title, description }) => {
    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 p-4 sm:p-6 rounded-2xl hover:shadow-xl">
            {/* image  */}
            <div className="overflow-hidden rounded-2xl flex flex-grow">
                <img className="transform transition duration-700 hover:scale-125 w-full" src={image} alt={title} />
            </div>
            {/* other info  */}
            <div className="flex mt-4 sm:mt-6 space-x-3">
                {/* icon  */}
                <div>
                    <img src={icon} alt={title} className="w-24 sm:w-36" />
                </div>
                {/* description  */}
                <div className="flex flex-col space-y-2 sm:space-y-3">
                    <h1 className="text-lg sm:text-xl text-gray-800 poppins">{title}</h1>
                    <p className="text-xs sm:text-sm text-gray-500 poppins">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutItem;
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
