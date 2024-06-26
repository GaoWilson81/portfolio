import React from 'react';
import epicGif from '../files/epic.gif';
import Image from 'next/image';
import schema from '../files/schema.png';
import dbGif from '../files/Stored Procedure Scenario .gif'

//Card component
const Card1 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="card">
        <div className="card-body">
          <Image className='w-full h-full' src={epicGif} alt='Epic Dashboard'/>
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
const Card2 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="card">
        <div className="card-body">
          <Image className='w-full h-full' src={schema} alt='Relational Schema'/>
          <Image className='w-full h-full' src={dbGif} alt='Database'/>
          
          <h5 className="card-title">Package Delivery Management</h5>
          <p className="card-text">This project included creating an Enhanced Entity Relationship Diagram (EERD),
             converting it into a relational schema, 
             and writing table statements for database management. 
             Emphasis was placed on thorough documentation and organizing data for various entity types. 
             This experience helped me apply database design principles to solve practical problems effectively.
          </p>
            <p>
              <b>Built with:</b>
              <p> SQL, MySQL</p>
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
            <Card1 />
          </div>
          <div className="pb-20 col-md-60">
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;
