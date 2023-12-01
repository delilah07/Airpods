import { airpods as airpodsData } from './data.js';
import { changeTheme } from './changeTheme.js';

// show first
const firstItem = airpodsData[0];
changeTheme(firstItem.name, airpodsData);

// change theme
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('choose__link')) {
    const btnType = e.target.dataset.type;
    changeTheme(btnType, airpodsData);
  }
});
