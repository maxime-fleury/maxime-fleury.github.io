document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('maxfdev@gmail.com');
    status.textContent = 'Adresse e-mail copiée.';
  } catch {
    status.textContent = 'Adresse à copier : maxfdev@gmail.com';
  }
});
