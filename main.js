import { aboutMe, experience, education, projects } from "./inputs.js";

document.getElementById('aboutMe').addEventListener("focus",
  function () {
    display("centerText", aboutMe);
  });
document.getElementById('experience').addEventListener("focus",
  function () {
    display("centerText", JSON.stringify(experience, null, 2)
      .replace(/\n( *)/g, function (match, p1) {
        return '<br>' + '&nbsp;'.repeat(p1.length);
      }));
  });
document.getElementById('education').addEventListener("focus",
  function () {
    display("centerText", JSON.stringify(education, null, 2)
      .replace(/\n( *)/g, function (match, p1) {
        return '<br>' + '&nbsp;'.repeat(p1.length);
      }));
  });
document.getElementById('projects').addEventListener("focus",
  function () {
    display("centerText", projects);
  });

document.getElementById('aboutMe').addEventListener("click",
  function () {
    display("centerText", aboutMe);
  });
document.getElementById('experience').addEventListener("click",
  function () {
    display("centerText", JSON.stringify(experience, null, 2)
      .replace(/\n( *)/g, function (match, p1) {
        return '<br>' + '&nbsp;'.repeat(p1.length);
      }));
  });
document.getElementById('education').addEventListener("click",
  function () {
    display("centerText", JSON.stringify(education, null, 2)
      .replace(/\n( *)/g, function (match, p1) {
        return '<br>' + '&nbsp;'.repeat(p1.length);
      }));
  });
document.getElementById('projects').addEventListener("click",
  function () {
    display("centerText", projects);
  });

function display(tab, text) {
  document.getElementById(tab).innerHTML = text;
}

document.getElementById('aboutMe').focus();

