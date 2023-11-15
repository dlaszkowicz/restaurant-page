import navigation from "./nav";

const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

const navigationBar = navigation();

content.appendChild(navigationBar);
