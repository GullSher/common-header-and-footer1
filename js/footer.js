// Load and insert the footer


fetch("./footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;

       // Optional: load footer.css
    // ✅ Dynamically add footer.css
    if (!document.querySelector('link[href$="css/footer.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./css/footer.css";
      document.head.appendChild(link);
    }
  })
  .catch((error) => console.error("Error loading footer:", error));








// to load footer.html at github

// fetch("./footer.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("footer").innerHTML = data;

//     // ✅ Dynamically add header.css relative to GitHub Pages repo root
//     if (!document.querySelector('link[href="css/footer.css"]')) {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";

//       // ✅ FIXED: Use full path relative to your GitHub repo
//       link.href = "common-header-and-footer1/css/footer.css";

//       document.head.appendChild(link);
//     }
//   })
//   .catch((error) => console.error("Error loading footer:", error));


// ========blow is working fine at local but now working at github pages


// const footerContainer = document.getElementById('footer');
// fetch('/footer.html')
//   .then(response => response.text())
//   .then(data => {
//     footerContainer.innerHTML = data;
//   });
