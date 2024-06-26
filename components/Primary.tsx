import React from 'react';
import gif from '../files/epic.gif';
import Image from 'next/image';
//Card component
const Card = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="card">
        <div className="card-body">
          <Image className='w-full h-full' src={gif} alt='Epic Dashboard'/>
          <h5 className="card-title">Epic Patient Dashboard</h5>
          <p className="card-text">Our team has partnered with a doctor from Emory 
            to develop an intuitive and user-friendly website tailored for healthcare professionals. 
            Our primary objective is to streamline user interactions by minimizing the number of clicks 
            required to access information.</p>
            <p>
              <b>Built with:</b>
              <p> Next.js, React, Typescript, Bootstrap, Tailwind CSS, Spring Boot</p>
            </p>
        </div>
      </div>
    </div>
  );
};

// Primary layout
const Primary = () => {
  return (
    <div className="pb-20 pt-10">
      <div className="container">
        <div className="row">
          <div className="pb-20 col-md-60">
            <Card />
          </div>
          <div className="pb-20 col-md-6">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;
