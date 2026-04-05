
// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Active nav links
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = '';
  const scrollPosition = window.scrollY;

  document.querySelectorAll('section[id]').forEach(section => {
    const sectionTop = section.offsetTop - 90;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);


// Get references to the buttons and navbar
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navbarNav = document.getElementById('navbarNav');

// Function to open the menu
function openMenu() {
  navbarNav.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
}

// Function to close the menu
function closeMenu() {
  navbarNav.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
}

// Add event listeners
menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Optional: Close menu when a link is clicked (for mobile)
document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
