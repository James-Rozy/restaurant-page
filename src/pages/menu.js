const getMenu = () => {
  const menu = document.createElement("div");
  const menuBanner = document.createElement("div");
  const menuHeader = document.createElement("h2");
  const appetizers = document.createElement("div");
  const appHeader = document.createElement("h3");
  const salads = document.createElement("div");
  const saladHeader = document.createElement("h3");
  const entrees = document.createElement("div");
  const entreeHeader = document.createElement("h3");
  const desserts = document.createElement("div");
  const dessertHeader = document.createElement("h3");

  menu.classList.add("menu");
  menuBanner.classList.add("menu-banner");
  appetizers.classList.add("menu-section");
  salads.classList.add("menu-section");
  entrees.classList.add("menu-section");
  desserts.classList.add("menu-section");

  menuHeader.textContent = "Menu";

  appHeader.textContent = "Appetizers";
  const app1 = getDish("Mixed Fried Vegetables", "Potatoes, sweet potatoes, onions, green beans, and carrots fried tempura style.");
  const app2 = getDish("Stuffed Mushrooms", "Cremini mushrooms stuffed and baked.");
  const app3 = getDish("Plant-cuterie Board", "A variety of housemade vegan cheeses and dips served with fruit and crackers.");
  const app4 = getDish("Sourdough Basket", "A whole loaf of our housemade sour dough served with plant butter.");

  saladHeader.textContent = "Salads";
  const salad1 = getDish("Thai Green Papaya Salad", "Green papaya, snake beans, cherry tomatoes, Thai basil, and crushed peanuts in a sweet and spicy chili dressing.");
  const salad2 = getDish("Loaded House Salad", "Arugula, kale, cucumber, cherry tomatoes, green onions, red onions, crispy chickpeas, and hemp hearts in a balsamic vinegarette.");
  const salad3 = getDish("Mediterranean Quinoa Salad", "Quinoa, cherry tomatoes, cucumbers, red onion, vegan feta, kalamata olives, crispy chickpeas, and mixed herbs tossed with a red wine vinagarette.");
  const salad4 = getDish("Caesar Salad", "Arugula, romaine, grilled tempeh, and sourdough croutons drizzled with a rich plant based caesar dressing.")

  entreeHeader.textContent = "Entrees";
  const entree1 = getDish("Legume and Grain Bowl", "Slow cooked red beans with your choice of rice or quinoa topped with a fresh salsa.");
  const entree2 = getDish("Stir Fried Glass Noodles", "Mixed vegetables and Korean sweet potato noodles stir fried in a sweet soy based sauce.");
  const entree3 = getDish("Drunken Fried Rice", "Spicy Thai chilis and holy basil stir fried with jasmine rice, onions, red peppers, and chinese broccoli in a Thai style stir fry sauce.");
  const entree4 = getDish("Falafel Platter", "Fried falafel patties served with a fattoush salad and our housemade pita and hummus.");

  dessertHeader.textContent = "Desserts";
  const dessert1 = getDish("Mango and Coconut Sticky Rice", "Sliced mango on top of sweet coconut sticky rice, it's like sushi for dessert!");
  const dessert2 = getDish("Blueberry Coffee Cake", "A perfectly moist coffee cake with a crumbly brown sugar top and blue berries mixed throughout.");
  const dessert3 = getDish("Hot Fudge Sundae", "Hot fudge, walnuts, and cherries on top of our signature banana ice cream.");
  const dessert4 = getDish("Seasonal Fruit Bowl", "A variety of delicious fruits that are in season.");

  menuBanner.appendChild(menuHeader);
  menu.appendChild(menuBanner);

  appetizers.appendChild(appHeader);
  appetizers.appendChild(app1);
  appetizers.appendChild(app2);
  appetizers.appendChild(app3);
  appetizers.appendChild(app4);
  menu.appendChild(appetizers);

  salads.appendChild(saladHeader);
  salads.appendChild(salad1);
  salads.appendChild(salad2);
  salads.appendChild(salad3);
  salads.appendChild(salad4);
  menu.appendChild(salads);

  entrees.appendChild(entreeHeader);
  entrees.appendChild(entree1);
  entrees.appendChild(entree2);
  entrees.appendChild(entree3);
  entrees.appendChild(entree4);
  menu.appendChild(entrees);

  desserts.appendChild(dessertHeader);
  desserts.appendChild(dessert1);
  desserts.appendChild(dessert2);
  desserts.appendChild(dessert3);
  desserts.appendChild(dessert4);
  menu.appendChild(desserts);

  return menu;
}

const getDish = (name, description) => {
  const dishDiv = document.createElement("div");
  const dishName = document.createElement("h4");
  const dishDescription = document.createElement("p"); 

  dishName.textContent = name;
  dishDescription.textContent = description;

  dishDiv.appendChild(dishName);
  dishDiv.appendChild(dishDescription);

  return dishDiv;
}

const setMenu = () => {
  const main = document.querySelector(".main");

  while(main.firstChild) {
    main.removeChild(main.firstChild);
  }

  main.appendChild(getMenu());
}

export default setMenu;