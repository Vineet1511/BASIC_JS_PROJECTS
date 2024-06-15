const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const recipeHead = document.querySelector(".recipe-heading");

//Fetch to get Recipes
const fetchRecipes = async (menuName)=>{
try{

    recipeHead.innerHTML = `<h4>Recieving your recipes....</h4>`;
    recipeHead.style.color = 'green'
    recipeContainer.innerHTML = "";

    await new Promise(resolve => setTimeout(resolve, 1000));

    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${menuName}`);
    console.log(data);
    const response = await data.json();
    // console.log(response.meals[0]);

    recipeHead.innerHTML = "";
    response.meals.forEach(meal =>{
        // console.log(meal)
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}"/>
            <h3>${meal.strMeal}</h3>
            <p><span> ${meal.strArea}</span> Dish</p>
            <p>Belongs to <span>${meal.strCategory}</span> Category</p>
            `;

        const recipeBtn = document.createElement("button");
        recipeBtn.innerText = "View Recipe";
        recipeDiv.appendChild(recipeBtn);

        //adding eventListener to button
        recipeBtn.addEventListener('click', ()=>{
            openRecipePopUp(meal);
            recipeDetailsContent.parentElement.style.display = "block"
        })
        
        recipeContainer.append(recipeDiv);
    })
    }catch(error){
        let warnMsg = document.querySelector(".recipe-heading");
        warnMsg.innerHTML = `<h4>OOPS!!! Couldn't find your recipes...</h4>`;
        warnMsg.style.color = "yellow"
    }
}

const  openRecipePopUp = (meal)=>{
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3>Ingredients :</h3>
        <ul class="ingredientsList">${fetchIngredients(meal)}</ul>
        <div class="recipeInstructions">
            <h3>Instructions :</h3>
            <p>${meal.strInstructions}</p>
        </div>`
        
}



//function to fetch Ingredients and measurements
const fetchIngredients = (meal)=>{
    // console.log(meal);
    let ingredientsList = "";
    for(let i=1; i<=20; i++){
        const ingredient = meal[`strIngredient${i}`];
        // console.log(ingredient)
        if(ingredient){
           const measure = meal[`strMeasure${i}`];
           ingredientsList += `<li>${measure} ${ingredient}</li>`  //+= use for remove override
        }else{
            break //if not found
        }
    }

    return ingredientsList;
}

searchBtn.addEventListener('click', (elem)=>{
    elem.preventDefault();
    const searchInput = searchBox.value.trim();

    if(searchInput === ""){
        let warnMsg = document.querySelector(".recipe-heading");
        warnMsg.innerHTML = `<h4>Type the meal in the search box...</h4>`;
        warnMsg.style.color = "yellow"

        return null;
    }
    fetchRecipes(searchInput);
})

recipeCloseBtn.addEventListener('click', ()=>{
    recipeDetailsContent.parentElement.style.display = "none";
})