  // Inject the header.html
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Dynamically add header.css if not already added
    if (!document.querySelector('link[href="css/header.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/header.css";
      document.head.appendChild(link);
    }
  })
  .catch(error => console.error("Error loading header:", error));



  // Load and insert the header
// const headerContainer = document.getElementById('header');
// fetch('/header.html')
//   .then(response => response.text())
//   .then(data => {
//     headerContainer.innerHTML = data;
//   });
