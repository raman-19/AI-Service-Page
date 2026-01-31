// Process section toggle
function toggleStep(step) {
  const detail = step.querySelector(".step-detail");
  const isOpen = detail.style.display === "block";

  document.querySelectorAll(".step-detail").forEach(d => {
    d.style.display = "none";
  });

  detail.style.display = isOpen ? "none" : "block";
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]');
  const email = this.querySelector('input[type="email"]');
  const message = this.querySelector("textarea");
  const status = document.getElementById("status");

  // Reset status
  status.textContent = "";
  status.style.color = "red";

  // Check empty fields
  if (!name.value || !email.value || !message.value) {
    status.textContent = "Please fill in all fields.";
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    status.textContent = "Please enter a valid email address.";
    return;
  }

  // Success message (simulate submission)
  status.style.color = "green";
  status.textContent = "Thank you! We will get back to you soon.";
  this.reset();
});
