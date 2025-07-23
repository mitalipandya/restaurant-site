document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("responseMessage").textContent = "Thank you! We'll get back to you soon.";
});
