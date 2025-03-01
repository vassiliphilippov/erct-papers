const pageLoaded = (e) => {
  if (768 >= window.innerWidth) {
    const menuToggle = document.querySelector('.icon-menu');

    menuToggle?.addEventListener('click', () => {
      document.documentElement.classList.toggle('open-menu');
    });
  }
  const documentAction = (e) => {
    const elementTarget = e.target;

    if (elementTarget.closest('.studies__list li')) {
      const studiesOption = document.querySelector('.studies__option');
      const currentElement = elementTarget.closest('.studies__list li');
      if (studiesOption && studiesOption.textContent !== currentElement.textContent) {
        studiesOption.textContent = currentElement.textContent;
      }
      console.log;
      e.preventDefault();
    }
  };
  document.addEventListener('click', documentAction);
};
window.addEventListener('load', pageLoaded);
