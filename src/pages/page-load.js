import getHome from "./home";
import getMenu from "./menu";
import getContact from "./contact";

const getHeader = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  const nav = getNav();
  
  title.textContent = "Rozy's Roadhouse";

  header.appendChild(title);
  header.appendChild(nav);

  return header;
}

const getNav = () => {
  const nav = document.createElement("nav");
  const btnHome = document.createElement("button");
  const btnMenu = document.createElement("button");
  const btnContact = document.createElement("button");

  btnHome.textContent = "Home";
  btnMenu.textContent = "Menu";
  btnContact.textContent = "Contact";

  nav.appendChild(btnHome);
  nav.appendChild(btnMenu);
  nav.appendChild(btnContact);

  return nav;
}

const getMain = () => {
  const main = document.createElement("div");
  main.classList.add("main");

  return main;
}

const getFooter = () => {
  const footer = document.createElement("footer");
  const nameTag = document.createElement("p");

  nameTag.textContent = `James Rozsypal © ${new Date().getFullYear()}`;

  footer.appendChild(nameTag);

  return footer;
}

const pageLoad = () => {
  const content = document.getElementById("content");

  content.appendChild(getHeader());
  content.appendChild(getMain());
  content.appendChild(getFooter());

  getHome();
}

export default pageLoad;