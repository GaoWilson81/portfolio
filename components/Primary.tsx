import React from 'react';
import epicGif from '../files/epic.gif';
import Image from 'next/image';
import schema from '../files/schema.png';
import dbGif from '../files/Stored Procedure Scenario .gif';
import froggerGif from '../files/frogger demo.gif';
import formGif from '../files/Problem Ideation Form.gif';

//Card component

// Project 1
const Card1 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Epic Patient Dashboard</h5>
          <p className="card-text">Our team has partnered with a doctor from Emory 
            to develop an intuitive and user-friendly website tailored for healthcare professionals. 
            Our primary objective is to streamline user interactions by minimizing the number of clicks 
            required to access information.</p>
            <p>
              <b>Built with:</b>
            </p>
            <p> Next.js, React, Typescript, Bootstrap, Tailwind CSS, Spring Boot</p>
            <Image className='w-full h-full' src={epicGif} alt='Epic Dashboard'/>
        </div>
      </div>
    </div>
  );
};

// Project 2
const Card2 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="card">
        <div className="card-body">
          
          <h5 className="card-title">Package Delivery Management</h5>
          <p className="card-text">This project included creating an Enhanced Entity Relationship Diagram (EERD),
             converting it into a relational schema, 
             and writing table statements for database management. 
             Emphasis was placed on thorough documentation and organizing data for various entity types. 
             This experience helped me apply database design principles to solve practical problems effectively.
          </p>
            <p>
              <b>Built with:</b>
            </p>
            <p> SQL, MySQL</p>
            <Image className='w-full h-full' src={schema} alt='Relational Schema'/>
            <Image className='w-full h-full' src={dbGif} alt='Database'/>
        </div>
      </div>
    </div>
  );
};

// Project 3
const Card3 = () => {
  return (
    <div className='col-md-6 d-flex justify-content-start align-item-center'>
      <div className="card w-50">
        <div className="card-body">
          
          <h5 className="card-title">Frogger Game</h5>
          <p className="card-text"> This project is a modern take on the classic road-crossing game. 
            It was one of my initial collaborative projects, during which I honed my skills in using Git and GitHub. 
            Throughout the development process, my team and I adhered to Agile methodologies, ensuring efficient and 
            iterative progress. Additionally, we implemented good coding practices and wrote JUnit test cases to 
            thoroughly test our functions.
          </p>
            <p>
              <b>Built with:</b>
            </p>
            <p> Java, Android Studio</p>
            <Image className='w-full h-auto' src={froggerGif} alt='Frogger Demo'/>
        </div>
      </div>
    </div>
  );
};

// Project 4
const Card4 = () => {
  return (
    <div className='col-md-6 d-flex justify-content-start align-item-center'>
      <div className="card w-100">
        <div className="card-body">
          
          <h5 className="card-title">CreateX Ideation Form</h5>
          <p className="card-text"> In this project, I delved into the JavaFX library, 
            experiencing its functionalities through thorough exploration of its documentation. 
            With this knowledge, I was able developed an ideation form for my assignment. 
            The project features a customizable background color palette, error 
            warnings for invalid inputs, and intuitive buttons for saving, editing, and removing user responses.
          </p>
            <p>
              <b>Built with:</b>
            </p>
            <p> Java, JavaFX</p>
            <Image className='w-full h-auto' src={formGif} alt='Ideation form Demo'/>
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
          <div className="pb-20 col-md-20">
            <div className="row">
              <Card3 />
              <Card4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;
