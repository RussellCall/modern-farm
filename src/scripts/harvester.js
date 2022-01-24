//define and export harvestPlants function.
//harvestPlants must accept "plantsArray" as input.
//harvestPlants must return seedObj.

export const harvestPlants = (plantsArray) => {
    let seedObjects = []

    //Iterate the array of growing plants.
    for (const plant of plantsArray) {

        //On each plant, get the value of the output property.
        if (plant.type === "corn") {

            const cropOutput = plant.output / 2
            for (let i = 0; i< corn.output; i++) {

                seedObjects.push(plant)
            }
        } else {

            for (let i = 0; i< plant.output; i++) {

                seedObjects.push(plant)
            }
        }
        
    }return seedObjects
};