import { airpods as airpodsData } from './data.js';
import { changeTheme } from './changeTheme.js';

// show first
const firstItem = airpodsData[0];
changeTheme(
  !localStorage.getItem('theme')
    ? firstItem.name
    : localStorage.getItem('theme'),
  airpodsData
);

// change theme
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('choose__link')) {
    const btnType = e.target.dataset.type;
    changeTheme(btnType, airpodsData);
    localStorage.setItem('theme', btnType);
  }
});

// load animation
window.addEventListener('load', loadAnim);
gsap.registerPlugin(MotionPathPlugin);
// console.log(MotionPathPlugin);

function loadAnim() {
  const tl = gsap.timeline({ default: { duration: 1 } });
  tl.from(
    '.header__logo',
    {
      scale: 0,
    },
    1
  )
    .from('.nav__link', {
      x: 200,
    })
    .fromTo(
      '.nav__item:last-child',
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
      }
    )
    .from('.design__image', { opacity: 0, duration: 2 }, '<')
    .fromTo(
      '.design__title span:nth-child(1)',
      { opacity: 0, x: -300, y: 300 },
      { opacity: 1, x: -300, y: 300, duration: 0.5 },

      '-=1.5'
    )
    .to(
      '.design__title span:nth-child(1)',
      {
        motionPath: {
          path: [
            { x: -300, y: 300 },
            { x: -100, y: -100 },
            { x: 0, y: 0 },
          ],
        },

        duration: 2,
      },
      '-=1.4'
    )
    .fromTo(
      '.design__title span:nth-child(2)',
      { opacity: 0, x: -300, y: -300 },
      { opacity: 1, x: -300, y: -300, duration: 0.5 },
      '-=1.5'
    )
    .to(
      '.design__title span:nth-child(2)',
      {
        motionPath: {
          path: [
            { x: -300, y: -300 },
            { x: 50, y: -200 },
            { x: 0, y: 0 },
          ],
        },

        duration: 2,
      },
      '-=1.3'
    )
    .fromTo(
      '.design__title span:nth-child(3)',
      { opacity: 0, x: 300, y: -300 },
      { opacity: 1, x: 300, y: -300, duration: 0.5 },
      '-=1.5'
    )
    .to(
      '.design__title span:nth-child(3)',
      {
        motionPath: {
          path: [
            { x: 300, y: -300 },
            { x: 50, y: -200 },
            { x: 0, y: 0 },
          ],
        },

        duration: 2,
      },
      '-=1.4'
    )
    .fromTo(
      '.design__title span:nth-child(4)',
      { opacity: 0 },
      { opacity: 1 },
      '-=1'
    )
    .fromTo(
      '.design__title span:nth-child(5)',
      { opacity: 0, x: 300, y: -300 },
      { opacity: 1, x: 300, y: -300, duration: 0.5 },
      '-=1.3'
    )
    .to(
      '.design__title span:nth-child(5)',
      {
        motionPath: {
          path: [
            { x: 300, y: -300 },
            { x: 50, y: -200 },
            { x: 0, y: 0 },
          ],
        },

        duration: 2,
      },
      '-=1.1'
    );
}
