// Select all FAQ containers
const faqContainers = document.querySelectorAll('[data-faq]');

faqContainers.forEach((container) => {
  const paragraph = container.querySelector('p');
  const icon = container.querySelector('img');

  // Add click event to toggle functionality
  icon.addEventListener('click', () => {
    // Toggle the paragraph visibility
    paragraph.classList.toggle('md:hidden');
    paragraph.classList.toggle('max-h-0');
    paragraph.classList.toggle('max-h-screen');

    // Toggle the icon
    if (icon.getAttribute('src') === '/images/plus-icon.svg') {
      icon.src = '/images/Chevron_Down.svg';
    } else {
      icon.src = '/images/plus-icon.svg';
    }
  });
});


const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
 btn.classList.toggle('open')
 nav.classList.toggle('flex')
 nav.classList.toggle('hidden')
})