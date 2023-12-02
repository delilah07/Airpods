import { airpods as airpodsData } from './data.js';
import { changeTheme } from './changeTheme.js';
import { loadAnim, scrollAnim } from './animation.js';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

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

// scrolling
scrollAnim();
