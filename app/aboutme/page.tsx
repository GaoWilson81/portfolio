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
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Georgia Institute of Technology - College of Computing</strong> | Teaching Assistant - CS1301
              <br />
              <em>August 2024 – Present</em>
              <ul className="list-disc list-inside">
                <li>As a Teaching Assistant for CS1301, 
                  I support students by conducting 4 hours of weekly office hours, 
                  where I address their questions and provide academic guidance. 
                  I also actively engage in the course&apos;s Ed Discussion forum, 
                  ensuring students receive timely clarifications and develop a strong understanding of the material.</li>
              </ul>
            </li>
            <br />
            <li>
              <strong>J Buffalo Wings</strong> | Manager
              <br />
              <em>October 2021 – August 2024</em>
              <ul className="list-disc list-inside">
                <li>In my role as Manager at J Buffalo Wings, I led daily operations, managed accounting, and optimized inventory processes, 
                  resulting in increased efficiency. 
                  I also focused on enhancing service quality by incorporating guest feedback, which significantly improved our reviews. 
                  Additionally, I streamlined supply orders to reduce waste and save costs.</li>
              </ul>
            </li>
          </ul>
        </div>

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