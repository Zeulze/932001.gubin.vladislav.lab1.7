"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelectorAll("button"),
    wrapper = document.querySelector(".content"),
    btnNames = ["square", "triangle", "circle"];

  let input = document.querySelector("[type='text']"),
    prevObj,
    prevTriangle;

  btn.forEach((item, index) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < input.value; i++) {
        let div = document.createElement("div"),
          size = Math.floor(Math.random() * 250) + 50;

        div.classList.add(`${btnNames[index]}`);

        if (index !== 1) {
          div.style.height = `${size}px`;
          div.style.width = `${size}px`;
          div.style.top = `${Math.floor(
            Math.random() * (wrapper.clientHeight - size - 50)
          )}px`;
          div.style.left = `${Math.floor(
            Math.random() * (wrapper.clientWidth - size - 50)
          )}px`;
        } else {
          div.style.borderWidth = `${size}px`;
          div.style.borderBottomWidth = `${size}px`;
          div.style.top = `${Math.floor(
            Math.random() * (wrapper.clientHeight - size * 2)
          )}px`;
          div.style.left = `${Math.floor(
            Math.random() * (wrapper.clientWidth - size * 2)
          )}px`;
        }
        wrapper.append(div);
      }
      input.value = "";
    });
  });

  let helper = false;

  wrapper.addEventListener("click", (event) => {
    let target = event.target;

    if (
      !target.classList.contains("yellow") &&
      (target.classList.contains(`${btnNames[0]}`) ||
        target.classList.contains(`${btnNames[2]}`))
    ) {
      if (helper) {
        prevObj.classList.remove("yellowTriangle");
        prevObj.classList.remove("yellow");
      }
      target.classList.add("yellow");
      prevObj = target;
    } else if (
      !target.classList.contains("yellowTriangle") &&
      target.classList.contains(`${btnNames[1]}`)
    ) {
      if (helper) {
        prevObj.classList.remove("yellowTriangle");
        prevObj.classList.remove("yellow");
      }
      target.classList.add("yellowTriangle");
      prevObj = target;
    } else {
      wrapper.removeChild(target);
    }
    helper = true;
  });
});
