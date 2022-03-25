const API_URL = `https://www.themealdb.com/api/json/v1/1/random.php`;
const SEARCH_BY_NAME = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
const SEARCH_BY_ID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
const main = document.querySelector('main');
const modal = document.querySelector('.modal');
const favourite_recipes = document.querySelector('.favourite-recipes');
const generate_recipes = document.querySelector('.generate-recipes')
const contain_recipe = document.querySelector('.contain-recipe');
const recipe_infos = document.querySelector('.recipe-infos');
const contain_favourite_recipes = document.querySelector('.contain-favourite-recipes');
const btn_generator = document.querySelector('.btn-generator');
const heart = document.querySelector('.heart');
const btnSearch = document.querySelector('.btn-search');
const inputSearch = document.querySelector('.input-search');




getRecipe(API_URL);

btn_generator.addEventListener('click',()=>{
    if (contain_recipe.children.length===1) {
        getRecipe(API_URL);
        removeModal()
    }else{
        contain_recipe.removeChild(contain_recipe.lastChild);
        recipe_infos.removeChild(recipe_infos.lastChild);
        getRecipe(API_URL);
        removeModal();
    }
})



function getRecipe(url) {
    fetch(url).then(res => res.json()).then(data => {
        generateRecipe(data.meals);
    })
}

function generateRecipe(data) {
    data.forEach(meal => {
        img_recipe = document.createElement('img');
        img_recipe.src = `${meal.strMealThumb}`;
        recipe_name = document.createElement('h2');
        recipe_name.innerText = `${meal.strMeal}`;
        contain_recipe.appendChild(img_recipe);
        recipe_infos.appendChild(recipe_name);
        heart.addEventListener('click',()=>{
            recipeInstructions(meal);
            removeModal();
        })
    });
}





function recipeInstructions(meal) {
    modal.className="visible";
        cross_remove = document.createElement('i');
        cross_remove.className="fa-solid fa-xmark cross-remove";     
        recipe_modal = document.createElement('div');
        recipe_modal.className="recipe-modal";
        h1_instruction = document.createElement('h1');
        h1_instruction.innerText = recipe_name.innerText; 
        span_instructions = document.createElement('span');
        span_instructions.innerText = `${meal.strInstructions}`;
        h2_instruction = document.createElement('h2');
        h2_instruction.innerText = `Ingredients`;
        var table = [meal.strIngredient1,meal.strIngredient2,meal.strIngredient3,meal.strIngredient4,meal.strIngredient5,meal.strIngredient6,meal.strIngredient7,meal.strIngredient8,meal.strIngredient9,meal.strIngredient10,meal.strIngredient11,meal.strIngredient12,meal.strIngredient13,meal.strIngredient14,meal.strIngredient15,meal.strIngredient16,meal.strIngredient17,meal.strIngredient18,meal.strIngredient19,meal.strIngredient20];
        ul = document.createElement('ul');
        for (let i = 0; i < 19; i++) {
            if (table[i]!="" && table[i]!="null") {   
                li = document.createElement('li');
                li.innerText=`${table[i]}`;
                ul.appendChild(li);
            }
        }
        recipe_modal.appendChild(cross_remove);
        recipe_modal.appendChild(h1_instruction);
        recipe_modal.appendChild(img_recipe);
        recipe_modal.appendChild(span_instructions);
        recipe_modal.appendChild(h2_instruction);
        recipe_modal.appendChild(ul);
        modal.appendChild(recipe_modal);    
}
        





function removeModal() {
            cross_remove.addEventListener('click',()=> {
                modal.classList.remove('visible');
                modal.innerHTML="";
                contain_recipe.appendChild(img_recipe);
                recipe_infos.appendChild(recipe_name);
            });
        }

    btnSearch.addEventListener('click',()=>{
        let recherche = inputSearch.value;
        if (isNaN(recherche)) {
            contain_recipe.innerHTML="";
            recipe_infos.innerHTML="";
            getRecipe(SEARCH_BY_NAME+recherche);
        }else{
            contain_recipe.innerHTML="";
            recipe_infos.innerHTML="";
            getRecipe(SEARCH_BY_ID+recherche);
        }
    })



    let nombre_de_pages=1;

    window.addEventListener('scroll',()=>{
        const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
        let page = API_URL+`&page=1`;
        if (scrollTop+clientHeight>scrollHeight-1) {
            let page1 = API_URL+`&page=`+nombre_de_pages++;
            setTimeout(() => {
                getMovies(page1);
            }, 2000);
        }
    })
       