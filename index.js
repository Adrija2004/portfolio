function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('active');
}
console.log("Test update for sync");
