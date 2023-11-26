import axios from "axios";

const API_KEY = "";
const options = {
    method: "GET",
    url: "https://foodprint.p.rapidapi.com/api/foodprint",
    headers: {
        "X-RapidAPI-Key": "3cbce25146mshb20fda4dd813bfcp19bf03jsncd1d1474207e",
        "X-RapidAPI-Host": "foodprint.p.rapidapi.com",
    },
};
export async function fetchArticles() {
    const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=b4e3ef74&app_key=&cuisineType=Eastern%20Europe&imageSize=LARGE&random=true&field=uri&field=label&field=image&field=dietLabels&field=ingredientLines&field=ingredients&field=totalWeight&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=tags`
    );
    // https://api.edamam.com/api/recipes/v2?type=public&app_id=b4e3ef74&app_key=${API_KEY}&cuisineType=Eastern%20Europe&mealType=Breakfast

    const data = response.data;
    return data.hits;
}

export async function getArticles() {
    try {
        const response = await axios.get("api/posts");
        return response.data;
        // console.log("get", response.data);
        // } else {
        //     console.error("CSRF token not found on the page.");
        // }
    } catch (error) {
        // Обработка ошибок
        console.error(error);
    }
}
