const form = document.getElementById('contactForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  result.textContent = "";

  const formData = new FormData(form);
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    result.textContent = "";
    form.reset();
  } else {
    result.textContent = "";
  }
});