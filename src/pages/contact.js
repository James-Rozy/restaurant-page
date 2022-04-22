const getContact = () => {
  const contact = document.createElement("div");
  const contactBanner = document.createElement("div");
  const contactHeader = document.createElement("h2");
  const phone = getSection("By Phone:", "(123)-456-7890");
  const email = getSection("By Email:", "rozy@rozeworks.com");
  const location = getSection("In Person:", "314 S Rozy St, Ann Arbor, Michigan");

  contact.classList.add("contact");
  contactBanner.classList.add("contact-banner");

  contactHeader.textContent = ("Contact");
  contactBanner.appendChild(contactHeader);

  contact.appendChild(contactBanner);
  contact.appendChild(phone);
  contact.appendChild(email);
  contact.appendChild(location);

  return contact;
}

const getSection = (section, description) => {
  const sectionDiv = document.createElement("div");
  const sectionName = document.createElement("h3");
  const sectionDesc = document.createElement("p");

  sectionDiv.classList.add("section");

  sectionName.textContent = section;
  sectionDesc.textContent = description;

  sectionDiv.appendChild(sectionName);
  sectionDiv.appendChild(sectionDesc);

  return sectionDiv;
}

const setContact = () => {
  const main = document.querySelector(".main");

  while(main.firstChild) {
    main.removeChild(main.firstChild);
  }

  main.appendChild(getContact());
}

export default setContact;