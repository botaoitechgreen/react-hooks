import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const formHandler = (userIngredients) => {
    setIngredients((preState) => {
      return [...preState, userIngredients];
    });
  };

  const removeItem = (id) => {
    setIngredients((preState) => {
      preState.filter((item, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div className="App">
      <IngredientForm handleForm={formHandler} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={removeItem} />
      </section>
    </div>
  );
}

export default Ingredients;
