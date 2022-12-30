import React, { useState, useEffect } from "react";
import "./Result.css"

export default function Meal({ result }) {

    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
    fetch(
        `https://api.spoonacular.com/recipes/${result.id}/information?apiKey=cabe11c03f694e5fa82994e4d70adc60&includeNutrition=false`
      )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [result.id]);
return(
  <article class="dish">
      <h1>{result.title}</h1>
      <img className="searchImg" src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {result.readyInMinutes} minutes</li>
        <li>Number of servings: {result.servings}</li>
      </ul>

      <a href={result.sourceUrl} class="recipe_link">Go to Recipe</a>
    </article>



);



}
