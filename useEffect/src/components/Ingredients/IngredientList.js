import React from "react";

import "./IngredientList.css";
import IngredientItem from "./IngredientItem";

const IngredientList = (props) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map((ig, index) => (
          <IngredientItem
            key={index}
            index={index}
            onRemove={props.onRemoveItem}
            ig={ig}
          />
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
