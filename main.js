import { aboutMe } from "./inputs.js";

document.getElementById('defSideNav').focus();

const sideSelected = (selection) => {
  var obj = document.getElementById(selection);
  obj.style['color'] = 'white';
  obj.style['background-color'] = 'black';
  obj.style['box-decoration-break'] = 'clone';
}

document.getElementById('centerText').innerHTML = aboutMe;

