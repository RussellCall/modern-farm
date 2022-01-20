export const createAsparagus = () => {
    const corn = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        corn.push(row)
    }

    return corn
}