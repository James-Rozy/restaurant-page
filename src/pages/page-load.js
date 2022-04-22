import setHome from "./home";
import setMenu from "./menu";
import setContact from "./contact";

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
  const btnHome = getButton("Home", "btnHome");
  const btnMenu = getButton("Menu", "btnMenu");
  const btnContact = getButton("Contact", "btnContact");

  nav.appendChild(btnHome);
  nav.appendChild(btnMenu);
  nav.appendChild(btnContact);

  return nav;
}

const getButton = (name, className) => {
  const button = document.createElement("button");

  button.classList.add(className);
  button.textContent = name;
  button.addEventListener("click", e => {
    if (e.target.classList.contains("btnHome")) {
      setHome();
    }
    if (e.target.classList.contains("btnMenu")) {
      setMenu();
    }
    if (e.target.classList.contains("btnContact")) {
      setContact();
    }
  });

  return button;
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
  const favicon = document.createElement("link");
  const body = document.getElementById("body");
  const content = document.getElementById("content");
  
  favicon.setAttribute("rel", "shortcut icon");
  favicon.setAttribute("href", "./images/favicon.png");

  document.head.appendChild(favicon);
  content.appendChild(getHeader());
  content.appendChild(getMain());
  content.appendChild(getFooter());

  setHome();
}

export default pageLoad;