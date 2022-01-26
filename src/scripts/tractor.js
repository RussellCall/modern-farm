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

export const plantSeeds = (yearlyPlan) => {
   //*old version* export const plantSeeds = (parentPlan) => {

    for (const subPlan of yearlyPlan) {
        for (const plan of subPlan) {
            ///for (const row of plan)
            if (plan === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (plan === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed[0])
                addPlant(cornSeed[1])
            }
            else if (plan === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plan === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plan === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plan === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
        
    }
    return usePlants()
}
