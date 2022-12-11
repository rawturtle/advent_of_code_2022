//https://adventofcode.com/2022/day/10
import fs from "fs";

const text = fs.readFileSync('../inputs/day10.txt', 'utf-8')
    .split('\r\n')

let cycles = 0
const noop = 'noop'
let spriteCenter = 1
let screen = ""

function addToCycle() {
    if (cycles === spriteCenter -1 || cycles  === spriteCenter || cycles === spriteCenter +1) {
        screen += "#"
    } else {
        screen += "."
    }

    cycles += 1
    if (cycles === 40) {
        screen += "\n"
        cycles = 0
    }

}
text.forEach((input) => {
    const [command, value] = input.split(" ")
    if (command == noop) {
        addToCycle()
    } else {
        let step = 0
        while (step < 2) {
            addToCycle()
            step++
        }
        spriteCenter += +value
    }
})
console.log(screen)

