import { selectCardHTML } from './createHTML.js';

export const changeTheme = (theme, arr) => {
  const themeObj = arr.find((obj) => obj.name === theme);
  console.log(themeObj);
  document.querySelector('.design__image img').src = `${themeObj.mainImg}`;
  document.querySelector(
    '.design__picture'
  ).style.background = `linear-gradient(${themeObj.gradient})`;
  document.querySelector('.composition__picture').src = `${themeObj.designImg}`;
  document.querySelector('.case__picture').src = `${themeObj.caseImg}`;

  document.querySelector('.choose__list').innerHTML = '';
  arr.forEach((el) => {
    if (el !== themeObj) {
      document
        .querySelector('.choose__list')
        .insertAdjacentHTML('beforeend', selectCardHTML(el));
    }
  });
};
