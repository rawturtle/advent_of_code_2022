import fs from 'fs';

//https://adventofcode.com/2022/day/2
const text = fs.readFileSync('../inputs/day2.txt', 'utf-8')
    .trim()
    .split('\r\n')

const myThrowArr = ['X', 'Y', 'Z']
const oppThrowArr = ['A', 'B', 'C']
const lossScore = 0
const drawScore = 3
const winScore = 6

let totalScore = 0
function findScore(round: string) {
    const myThrowIndex = myThrowArr.indexOf(round[2])
    const oppThrowIndex = oppThrowArr.indexOf(round[0])
    totalScore += myThrowIndex + 1

    if (myThrowIndex === oppThrowIndex) {
        totalScore += drawScore
    } else if (myThrowIndex - 1 ===  oppThrowIndex) {
        totalScore += winScore
    } else if (myThrowIndex - 1 === -1 && oppThrowIndex == 2) {
        totalScore += winScore
    } else {
        totalScore += lossScore
    }
}

text.forEach((round) => {
    findScore(round)
})

console.log(totalScore)
