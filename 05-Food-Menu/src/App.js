import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) => item.category === category);
    return setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Food Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} allCategories={category} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
