const navigation = function () {
  const navbar = document.createElement("nav");
  content.appendChild(navbar);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menuBtn");
  menuBtn.textContent = "Menu";
  navbar.appendChild(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("contactBtn");
  contactBtn.textContent = "Contact";
  navbar.appendChild(contactBtn);

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("homeBtn");
  navbar.appendChild(homeBtn);
  homeBtn.textContent = "Home";

  return navbar;
};

export default navigation;
