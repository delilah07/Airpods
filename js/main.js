import { airpods as airpodsData } from './data.js';
import { changeTheme } from './changeTheme.js';

// show first
const firstItem = airpodsData[0];
changeTheme(firstItem.name, airpodsData);

// change theme
