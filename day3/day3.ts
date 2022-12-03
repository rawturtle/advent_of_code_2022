import fs from "fs";
import {generateAlphabet} from "../helperFunctions/helpers";

//https://adventofcode.com/2022/day/3
const text = fs.readFileSync('../inputs/day3.txt', 'utf-8')
    .trim()
    .split('\r\n')

const alphabet = generateAlphabet()
function part1(text: string[]) {
    let totalScore = 0

    text.map((line) => {
        const p1 = new Set(line.substring(0, line.length / 2).split(''))
        const p2 = new Set(line.substring(line.length / 2).split(''))

        for (let item of [...p1]) {
            if (p2.has(item)) {
                totalScore += alphabet.indexOf(item) + 1
            }
        }
    })
    console.log(totalScore)
}
part1(text)
// 8240

function part2(lines: string[]) {
    let totalScore = 0

    for (let i = 0; i < lines.length; i+= 3) {
        const bag1 = [...new Set(lines[i].split(""))]
        const bag2 = new Set(lines[i+1].split(""))
        const bag3 = new Set(lines[i+2].split(""))

        const combined = bag1.filter((item) => {
            return bag2.has(item) && bag3.has(item)
        })
        totalScore += alphabet.indexOf(combined[0]) + 1
    }
    console.log(totalScore)
}

part2(text)
//2587