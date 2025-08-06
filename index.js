// index.js

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
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
