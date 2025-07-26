document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const vid   = document.getElementById('introVid');

  document.body.classList.add('loading');

  const removeIntro = () => {
    intro.classList.add('fade-out');
    setTimeout(() => {
      intro.remove();
      document.body.classList.remove('loading');
    }, 800);
  };

  vid.addEventListener('ended',  removeIntro);
  vid.addEventListener('error',  removeIntro);

  intro.addEventListener('click', removeIntro);
});
