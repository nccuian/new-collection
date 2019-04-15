const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 400
});

const sli = document.querySelectorAll('.side-bar li');

sli.forEach(li => {
  li.addEventListener('click', (e) => {
    const sc = document.querySelector('.side-bar .current');
    sc.classList.remove('current');
    const hash = e.target.hash;
    const target = document.querySelector(`.side-bar a[href='${hash}']`);
    target.classList.add('current');
  });
});