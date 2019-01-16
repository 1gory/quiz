document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementsByClassName('load')[0];
  new Promise((resolve) => {
    setTimeout(() => {
      preloader.classList.add('load__hiden');
      resolve();
    }, 500);
  }).then(() => (
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500)
  ));
});
