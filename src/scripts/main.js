console.log("Welcome to the main module")
import { addPlant, usePlants } from "./field.js";
import { createPlan } from "./plan.js";


export const newCreatePlan = createPlan() 

console.log(newCreatePlan);

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

//Create seed object

const seedObj = {
    type: "seed object",
    height: 2,
    output: 5
};

//imports needed for follow up function.
import { plantSeeds } from "./tractor.js";

let morePlants = addPlant(seedObj)
console.log(morePlants)

let plantUse = usePlants()
console.log(plantUse)

let plantingSeeds = plantSeeds()
console.log(plantingSeeds)

import { fieldOfPlants } from "./field.js"


