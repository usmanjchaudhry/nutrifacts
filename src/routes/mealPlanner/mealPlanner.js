import React, { Component, useState } from "react";
// This will require to npm install axios
import './mealPlanner.css'
import MealList from "./MealList";



function Mealplanner() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cabe11c03f694e5fa82994e4d70adc60&diet=vegetarian&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data)
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }




    return (
<div className="App">
  <section className="controls">
  <h1 class="home__title">Want Better Meals?</h1>
  <img src="img/MealPrepFixed.png" alt="" class="mealPlan__img"/>
    <h1>Plan out your day with a daily meal plan</h1>
  <h4>For more information about daily caloric intake click <u className="oneWord"> <a href = 'https://www.fda.gov/media/112972/download'>here</a></u></h4>
    <input
      class="mealplannerInput"
      type="number"
      placeholder="Calories (e.g. 2000)"
      onChange={handleChange}
    />
    <button onClick={getMealData} class="input">Get Daily Meal Plan</button>
   
  </section>
  {mealData && <MealList mealData={mealData} />}
</div>


);
}

export default Mealplanner;