import React, { useState } from 'react';

function Portfolio() {

//   // Replace links with deployed projects and GitHub repos
//   const [projects] = useState([
//     {
//       name: 'surf-report',
//       description: 'MERN Stack',
//       link: "https://github.com",
//       repo: "https://github.com"
//     },
//     {
//       name: 'pastel-puzzels',
//       description: 'MERN Stack',
//       link: "https://github.com",
//       repo: "https://github.com"
//     },
//     {
//       name: 'run-buddy',
//       description: 'HTML/CSS',
//       link: "https://github.com",
//       repo: "https://github.com"
//     },
//     {
//       name: 'led-wall',
//       description: 'Node/IoT',
//       link: "https://github.com",
//       repo: "https://github.com"
//     },
//     {
//       name: 'calculator',
//       description: 'React/JavaScript/CSS',
//       link: "https://github.com",
//       repo: "https://github.com"
//     },
//   ]);

  return (
    <div>
      <div class="projects">

<div class="run-buddy">
    <a href="https://adambelin.github.io/run-buddy/" target="_blank" rel="noopener">
    <img src="./assets/images/run-buddy.png" alt="Run Buddy Landing Page"/>
    </a>
    <div>
        <p class="project-label">Run Buddy</p>
        <p>HTML/CSS</p>
    </div>
</div>

<div class="two-column">
    <div class="twitter">
        <a href="https://twitter.com/" target="_blank" rel="noopener">
        <img src="./assets/images/twitter.png" alt="Twitter landing page"/>
        </a>
        <div>
            <p class="project-label">Twitter</p>
            <p>Javascript/HTML/CSS</p>
        </div>
    </div>


    <div class="amazon">
        <a href="https://amazon.com/" target="_blank" rel="noopener">
        <img src="./assets/images/amazon.png" alt="amazon landing page"/>
        </a>
        <div>
            <p class="project-label">Amazon</p>
            <p>Bootstrap/CSS/Javascript</p>
        </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Portfolio;