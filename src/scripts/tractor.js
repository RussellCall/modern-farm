import { addPlant, usePlants } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";




//Define and export a plantSeeds function.
//Function must accept the year's planting plan as input.
//(plantingPlan is a parameter).

export const plantSeeds = (parentPlan) => {


    for (const subPlan of parentPlan) {
        for (const plantType of subPlan) {
            if (plantType === "asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (plantType === "corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed[0])
                addPlant(cornSeed[1])
            }
            else if (plantType === "potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plantType === "soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plantType === "sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plantType === "wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
        return usePlants()
    }
}
