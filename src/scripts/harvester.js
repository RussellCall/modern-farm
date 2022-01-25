//define and export harvestPlants function.
//harvestPlants must accept "plantsArray" as input.
//harvestPlants must return seedObj.

export const harvestPlants = (plantsArray) => {
    let seedObj = []

    //Iterate the array of growing plants.
    for (const plant of plantsArray) {

        //On each plant, get the value of the output property.
        if (plant.type === "corn") {

            const cornOutput = plant.output / 2
            for (let i = 0; i< cornOutput; i++) {

                seedObjects.push(plant)
            }
        } else {

            for (let i = 0; i< plant.output; i++) {

                seedObj.push(plant)
            }
        }

    }return seedObj
};