import { createPlan } from "./plan.js";
const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createCorn } from "./seeds/corn.js";
const cornPlan = createCorn()

import { createAsparagus } from "./seeds/asparagus.js"
const asparagusPlan = createAsparagus()

import { plantSeeds } from "./tractor.js";
const plantedSeeds = plantSeeds(yearlyPlan)

import { harvestPlants } from "./harvester.js";
const harvestedPlants = harvestPlants(plantedSeeds)
console.log(harvestedPlants)


