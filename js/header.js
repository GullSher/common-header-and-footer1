// Load and insert the header
const headerContainer = document.getElementById('header');
fetch('/header.html')
  .then(response => response.text())
  .then(data => {
    headerContainer.innerHTML = data;
  });
