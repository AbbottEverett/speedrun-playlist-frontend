(function() {
  const viewToggle = document.getElementById('view-toggle');
  viewToggle.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
  });
})();
