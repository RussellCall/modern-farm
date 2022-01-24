import { usePlants } from "./field.js";
import {createAsparagus} from "./seeds/asparagus.js";
import {createCorn} from "./seeds/corn.js";
import {createPotato} from "./seeds/potato.js";
import {createSoybean} from "./seeds/soybean.js";
import {createSunflower} from "./seeds/sunflower.js";
import {createWheat} from "./seeds/wheat.js";




//Define and export a plantSeeds function.
    //Function must accept the year's planting plan as input.
    //(plantingPlan is a parameter).
export const plantSeeds = (mainPlan) => {
    

}
for (const subPlan of mainPlan) {
    for (const plantType of subPlan) {
        if (sunPlan === "asparagus") {
            const asparagusSeed = createAsparagus()
        }
        else (plantType === "corn") {
            const cornSeed = createCorn()
        }
        if (plantType === "potato") {
            const potatoSeed = createPotato()
        }
        if (plantType === "soybean") {
            const soybeanSeed = createSoybean()
        }
        if (plantType === "sunflower") {
            const sunflowerSeed = createSunflower()
        }
        if (plantType === "wheat") {
            const wheatSeed = createWheat()
        }
    }
    return usePlants
}







/* Example growing plan. Actual plan is bigger.
[
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]  */

