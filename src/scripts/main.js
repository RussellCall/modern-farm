console.log("Welcome to the main module")
import { createPlan } from "./plan.js";


const newCreatePlan = createPlan() 

console.log(newCreatePlan);

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)