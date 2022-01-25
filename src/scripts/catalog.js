//Define and export a "Catalog" function.
export const Catalog = (harvestedFoodArray) => {

    //Catalog function should iterate the array of food objects.
    for (plant of harvestedFoodArray) {
        //Iterate food array.
        let element = document.querySelector(".container")

        //html template...
        element.innerHTML += `<section class="plant">${plant.name}</section>`
        

    }
}
