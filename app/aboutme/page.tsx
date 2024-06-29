import Nav from "@/components/Nav";
import React from "react";

const AboutMe = () => {
  return (
    <div className="container mx-auto mt-4">
      <Nav />
      <div className="bg-white shadow-md rounded-lg px-8 py-6">
        <h2 className="font-bold mb-4">About Me</h2>
        <hr />
        <div className="flex items-center mb-4">
          <div>
            <p className="text-lg font-semibold">Wilson Gao</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Hi, I&apos;m Wilson Gao, an undergraduate student at Georgia Tech, 
          currently pursuing a Bachelor&apos;s degree in Computer Science. 
          My passion lies in software development, 
          and I am particularly drawn to the creative challenges it presents. 
          Beyond academics, I enjoy spending my time playing video games. 
          I immerse myself in the world the developers has created and embark my adventure from within. 
          
        </p>
        <div>
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <ul className="list-disc list-inside">
            <li>Java, Python, Javascript, C, MATLAB, Assembly, HTML, CSS, Typescript, SQL</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Technologies/Framework</h3>
          <ul className="list-disc list-inside">
            <li>Docker, Git, GitHub, JFrame, JavaFX, MySQL, Spring Boot, React, Next.js, Bootstrap, Tailwind CSS</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Courses completed</h3>
          <ul className="list-disc list-inside">
            <li>Data Structures and Algorithms, 
              Object Oriented Programming, 
              Linear Algebra, Discrete Math, 
              Database Systems, Computer Organization &amp; Programming</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe