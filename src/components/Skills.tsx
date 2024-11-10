import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div  data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
          <p className='text-gray-500 pt-2'>
          The technologies I work with span a wide range of tools and frameworks that help me build modern, efficient, and scalable web applications. On the front-end, I often use **HTML**, **CSS**, and **JavaScript** to create responsive and dynamic user interfaces. Frameworks like **React** or **Vue.js** help me streamline development and create interactive, state-driven applications. For styling, I rely on **CSS preprocessors** like **Sass** and tools like **Bootstrap** to ensure that designs are both flexible and visually appealing. On the back-end, I work with languages like **Node.js**, **Python**, or **PHP**, along with frameworks like **Express** or **Django** to handle server-side logic and database management. I also use **RESTful APIs** and **GraphQL** to facilitate communication between the front-end and back-end. For database management, I often work with **SQL** databases like **MySQL** or **PostgreSQL**, or **NoSQL** options like **MongoDB** depending on the project needs. Additionally, I use version control systems like **Git** and collaborate with platforms such as **GitHub** or **GitLab** to manage code and work in teams efficiently. These tools, along with cloud services like **AWS** and **Azure**, allow me to create scalable, maintainable, and performant web applications.
          </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2  data-aos="zoom-in-up">Typescript</h2>
                    <h2  data-aos="zoom-in-up">React.js</h2>
                    <h2  data-aos="zoom-in-up">Next.js</h2>
                    </div>

                    <div className='space-y-2'>
                    <h2  data-aos="zoom-in-up">Tailwind</h2>
                    <h2  data-aos="zoom-in-up">CSS</h2>
                    <h2  data-aos="zoom-in-up">Node.js</h2>
                    </div>
            </div>
        </div>


      </div>
      
    </div>
  )
}

export default Skills
