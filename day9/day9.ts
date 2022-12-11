//https://adventofcode.com/2022/day/9
import fs from "fs";

const text = fs.readFileSync('../inputs/day9.txt', 'utf-8')
    .split('\r\n')

// row | col
let currentHeadPos = [0,0]
let currentTailPos = [0,0]

const uniqueLocations = new Set()
addToSet(currentTailPos)

let textIndex = 0
while(text.length > textIndex) {
    const direction = text[textIndex][0]
    const moveAmount = +text[textIndex][2]

    for (let index = 1; index <= moveAmount; index++) {
        if (direction === "L") currentHeadPos[1] -= 1
        if (direction === "R") currentHeadPos[1] += 1
        if (direction === "U") currentHeadPos[0] -= 1
        if (direction === "D") currentHeadPos[0] += 1
        checkTailMove()
    }
    textIndex++
}

console.log(uniqueLocations.size)
// low -> 3257


function addToSet(tailPos: number[]) {
    const posValue = `${tailPos[0]},${tailPos[1]}`
    if (!uniqueLocations.has(posValue)) uniqueLocations.add(posValue)
}

function checkTailMove() {
    // same spot don't move
    if (currentHeadPos[0] === currentTailPos[0] && currentHeadPos[1] === currentTailPos[1]) return


    // check if touching....
    const rowDiff = currentHeadPos[0] - currentTailPos[0]
    const colDiff = currentHeadPos[1] - currentTailPos[1]

    if (rowDiff == 2 || rowDiff == -2 || colDiff == 2 || colDiff == -2) {
        const rowMove = rowDiff > 0 ? 1 : -1
        const colMove = colDiff > 0 ? 1 : -1

        if (rowDiff !== 0) currentTailPos[0] = currentTailPos[0] + rowMove
        if (colDiff !== 0) currentTailPos[1] = currentTailPos[1] + colMove
        addToSet(currentTailPos)
    }
}