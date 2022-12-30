import React, { useState, useEffect } from "react";
import './Meal.css'

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cabe11c03f694e5fa82994e4d70adc60&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article className="output">
      <img className="mealPlanImg" src={imageUrl} alt="recipe" />
      <div className="bodyOfOutput">
      <h1>{meal.title}</h1>
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li className="servings">Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl} class="recipe_link">Go to Recipe</a>
      </div>
    </article>
  );
}
