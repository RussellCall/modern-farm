//Define a variable with initial value being an empty array
    //The array will store plants growing in the field.

const fieldOfPlants = [];


//Define and export a function named addPlant.
//addPlant function must accept a seed object as input.
    //Function will add the seed to the field.
export const addPlant = (seedObj) => {
    //"Investigate the "Array.isArray" method to check if corn got passed in"
    if (seedObj === Array.isArray(seedObj)) {
        for (const corn of seedObj) {
            field.push(corn)
        }
    } else {
        field.push(seedObj)
    }
};

//Define and export a function named usePlants.
    //Returns a copy of the array of plants.
export const usePlants = () => {
    const fieldOfPlantsCopy = fieldOfPlants.map(seedObj => ({...seedObj}) )
        return fieldOfPlantsCopy
};

/* companies.map( => ({...company}))
    return companiesCopy
} */


    /*---.When planting corn, an array of 
    objects will be provided instead of a single object 
    like all the other type of seeds. Investigate 
    the "Array.isArray" method to check if corn got 
    passed in, or one of the others.---*/