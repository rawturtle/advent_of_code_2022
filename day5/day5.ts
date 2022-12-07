//https://adventofcode.com/2022/day/5
import fs from "fs";

const text = fs.readFileSync('../inputs/day5.txt', 'utf-8')
    .split('\r\n')

const alphabet = Array.from(Array(26)).map((_, i) => i + 65);
const alphabetArr =  alphabet.map((x) => String.fromCharCode(x).toUpperCase());

const rawHeaders = text.filter((line) => {
    return !line.includes("move")
})

const fullInstructions = text.filter((line) => {
    return line.includes("move")
})

const instructions: string[][] = fullInstructions.map((line) => {
    return line.match(/\d+/g) as string[]
})

const stack: string[][] = [[],[],[],[],[],[],[],[],[],[]]

for (let row = 0; row < rawHeaders.length-2; row++) {
    let stackIndex = 0
    for (let col = 1; col < rawHeaders[row].length; col += 4) {
        stackIndex++
        const createValue = rawHeaders[row].split('')[col]
        if (alphabetArr.includes(createValue)) {
            stack[stackIndex].unshift(createValue)
        }
    }
}

function part1() {
    const p1Stack = [...stack]
    console.log(p1Stack)
    instructions.forEach((line: string[]) => {
        let index = 0
        while (index < +line[0]) {
            p1Stack[+line[2]].push(p1Stack[+line[1]].pop()!!)
            index++
        }
    })
    const result = p1Stack.map((values) => {
        return values.pop()
    }).join("")
    console.log(result)
}

function part2() {
    const p2Stack = [...stack]

    instructions.forEach((line: string[]) => {
        const removed = p2Stack[+line[1]].splice(p2Stack[+line[1]].length - +line[0])
        p2Stack[+line[2]] = [...p2Stack[+line[2]], ...removed]
    })

    const result = p2Stack.map((values) => {
        return values.pop()
    }).join("")
    console.log(result)
}

part1()
part2()

