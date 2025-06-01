const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const projectsData = [
  {
    image: 'task image.jpg',
    description: 'Number Guessing Game, Student Grade Calculator, and ATM Interface—strengthening logic,and user interaction skills.',
    link: 'https://github.com/abikumard/CODSOFT'
  },
  {
    image: 'chatgpt img 2.png',
    description: 'Built a dynamic ReactJS app implementing CRUD operations to manage data efficiently with a responsive interface.',
    link: 'https://github.com/abikumard'
  },
  {
    image: 'chatgpt img.png',
    description: 'Built a website for symposium coordinator details using HTML, CSS, and JavaScript for efficient event management.',
    link: 'https://abikumard.github.io/College-Poster/'
  }
];

const projectsContainer = document.getElementById('projects-container');

projectsData.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  projectCard.innerHTML = `
    <img src="${project.image}" alt="Project Image">
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;

  projectsContainer.appendChild(projectCard);
});
