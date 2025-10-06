// Wait for the document to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    // Get form values
    const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields before sending your message.");
      return;
    }

    // Save the message (optional: localStorage or send to server later)
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({ name, email, message, date: new Date().toLocaleString() });
    localStorage.setItem("messages", JSON.stringify(messages));

    // Show success message
    alert("Thank you, " + name + "! Your message has been sent successfully.");

    // Clear the form
    form.reset();
  });
});
