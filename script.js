document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('maxfdev@gmail.com');
    status.textContent = window.portfolioI18n?.t('Adresse e-mail copiée.') ?? 'Adresse e-mail copiée.';
  } catch {
    status.textContent = window.portfolioI18n?.t('Adresse à copier : maxfdev@gmail.com') ?? 'Adresse à copier : maxfdev@gmail.com';
  }
});
