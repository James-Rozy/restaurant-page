const getHome = () => {
  const home = document.createElement("div");
  const banner = document.createElement("div");
  const welcome = document.createElement("h2");
  const who = getSection("Who", "I'm James, founder of Rozy's Roadhouse! A guy who's passion for living life and eating great food led me to realizing the awesome benefits of a plant based diet.");
  const what = getSection("What", "Because of this realization and my desire to share delicious food with other people, I started dreaming of ways I could turn that desire into reality. So, now I am proud to be introducing you to the product of that dream, Rozy's Roadhouse! The “Rozehouse” (our own affectionate nickname) is a plant based cafe that features a seasonally changing menu with familiar items that will entice both plant based newbies and veterans alike.");
  const when = getSection("When", "At the Rozehouse we've recognized the impact that eating animals and their products (i.e. cows and dairy) has not only on our bodies, but also the earth. By eating animal-protein based diets we poison ourselves and the planet severely, leading to terminal conditions such as cancer and climate change. The time to make a change is now, and we are here to help!");
  const where = getSection("Where", "We're based in Ann Arbor, Michigan. So, if you're ever in the mitten consider stopping by to give us a visit!");
  const why = getSection("Why", "Our goal is to feed people really good food that's also really good for them, and in order to do that we must cut out animal based foods. But, this definitely does not mean we're cutting out any nutrients, in fact by eating plant based we gain much more nutrition from our food. Still skeptical? Check out THIS mini course courtesy of the Center of Nutritional Studies (https://nutritionstudies.org/plant-based-health-mini-course/).");

  home.classList.add("home");
  banner.classList.add("banner");

  welcome.textContent = "Welcome to Rozy's Roadhouse!";

  banner.appendChild(welcome);
  home.appendChild(banner);
  home.appendChild(who);
  home.appendChild(what);
  home.appendChild(when);
  home.appendChild(where);
  home.appendChild(why);

  return home;
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

const setHome = () => {
  const main = document.querySelector(".main");

  while(main.firstChild) {
    main.removeChild(main.firstChild);
  }

  main.appendChild(getHome());
}

export default setHome;
