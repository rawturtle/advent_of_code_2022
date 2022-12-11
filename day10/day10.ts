//https://adventofcode.com/2022/day/10
import fs from "fs";

const text = fs.readFileSync('../inputs/day10.txt', 'utf-8')
    .split('\r\n')

let total = 1
let score = 0
let cycles = 0
const noop = 'noop'

const steps = [20, 40, 60, 100, 140, 180, 220]
function addToCycle() {
    cycles += 1
    if (steps.includes(cycles)) {
        score += total * cycles
    }
}

text.forEach((input) => {
    const [command, value] = input.split(" ")
    if (command == noop) {
        addToCycle()
    } else {
        let index = 0
        while (index < 2) {
            addToCycle()
            index++
        }
        total += +value
    }
})

console.log(score)
//14760