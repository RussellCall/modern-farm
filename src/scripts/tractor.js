import {createAsparagus} from "./seeds/asparagus.js";
const asparagusSeed = createAsparagus();

import {createCorn} from "./seeds/corn.js";
const cornSeed = createCorn();

import {createPotato} from "./seeds/potato.js";
const potatoSeed = createPotato();

import {createSoybean} from "./seeds/soybean.js";
const soybeanSeed = createSoybean();

import {createSunflower} from "./seeds/sunflower.js";
const sunflowerSeed = createSunflower();

import {createWheat} from "./seeds/wheat.js";
const wheatSeed = createWheat();




//Define and export a plantSeeds function.
    //Function must accept the year's planting plan as input.
    //(plantingPlan is a parameter).
export const plantSeeds = (newCreatePlan) => {
    

}
for (const plan of plantingPlan) {
    for (const plantType of plan) {
        if (plantType === "asparagus") {
            const asparagusSeed = createAsparagus()
        }
        if (plantType === "corn") {
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
}



/* Example growing plan. Actual plan is bigger.
[
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]  */

