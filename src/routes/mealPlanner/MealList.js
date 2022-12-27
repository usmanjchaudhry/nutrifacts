import React from "react";
import Meal from "./Meal";
import './MealList.css';

import "./MealList.css"


export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h1 className="macros">Macros</h1>
        <ul>
          <li class="nutrition">Calories: {nutrients.calories.toFixed(0)}</li>
          <li class="nutrition">Carbohydrates: {nutrients.carbohydrates.toFixed(0)}g</li>
          <li class="nutrition">Fat: {nutrients.fat.toFixed(0)}g</li>
          <li class="nutrition">Protein: {nutrients.protein.toFixed(0)}g</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}