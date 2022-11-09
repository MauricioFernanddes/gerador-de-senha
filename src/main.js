//console.log("hello word");

import { nanoid } from 'nanoid'
import "./style.css";

const passowordBtnEl = document.querySelector('button');
const displauPassowordElm = document.querySelector('h2');

passowordBtnEl.addEventListener('click', () => {
  displauPassowordElm.innerHTML = nanoid();
});