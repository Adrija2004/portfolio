

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    topBtn.style.display = window.scrollY > 100 ? "block" : "none";
  }
};


window.onload = () => showSection('home');
