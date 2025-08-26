const items = document.querySelectorAll('li');
items.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.2}s`;
  item.classList.add('fade-in');
});

// In CSS, add:
// .fade-in { opacity: 0; transform: translateY(20px); animation: show 0.5s forwards; }
// @keyframes show { to { opacity: 1; transform: translateY(0); } }
