const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

searchBtn.addEventListener("click", getMealList);
mealList.addEventListener("click", getMealRecipe);
recipeCloseBtn.addEventListener("click", () =>{
	mealDetailsContent.parentElement.classList.remove("show-recipe");
});

function getMealList(){
	var searchInputText = document.getElementById("search-input").value.trim();
	fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
	.then(res => res.json())
	.then(data =>{
		var html = "";
		if(data.meals){
			data.meals.forEach(meal =>{
				html += `
					<div class="meal-item" data-id="${meal.idMeal}">
						<div class="meal-img">
							<img src="${meal.strMealThumb}" alt="${meal.strMeal}">
						</div>
						<div class="meal-name">
							<h3> ${meal.strMeal} </h3>
							<a href="#" class="recipe-btn"> Get Recipie </a>
						</div>
					</div>
				`;
			});
			mealList.classList.remove("notFound");
		} else {
			html = "Sorry, we didn't found any meals corresponding to your keyword.";
			mealList.classList.add("notFound");
		}
		mealList.innerHTML = html;
	});
}

function getMealRecipe(e){
	e.preventDefault();
	if(e.target.classList.contains("recipe-btn")){
		var mealItem = e.target.parentElement.parentElement;
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
		.then(res => res.json())
		.then(data => mealRecipeModal(data.meals));
	}
}

function mealRecipeModal(meal){
	meal = meal[0];
	var html = `
		<h2 class="recipe-title"> ${meal.strMeal} </h2>
		<p class="recipe-category"> ${meal.strCategory} </p>
		<div class="recipe-instruction">
			<h3> Instruction: </h3>
			<p> ${meal.strInstructions} </p>
		</div>
		<div class="recipe-meal-img">
			<img src="${meal.strMealThumb}" alt="food">
		</div>
		<div class="recipe-link">
			<a href="${meal.strYoutube}" target="_blank"> Watch Video </a>
		</div>
	`;
	mealDetailsContent.innerHTML = html;
	mealDetailsContent.parentElement.classList.add("show-recipe");
}