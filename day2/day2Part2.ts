import fs from 'fs';

//https://adventofcode.com/2022/day/2
const text = fs.readFileSync('../inputs/day2.txt', 'utf-8')
    .trim()
    .split('\r\n')

const myThrowArr = ['X', 'Y', 'Z']
const oppThrowArr = ['A', 'B', 'C']

const drawScore = 3
const winScore = 6

let totalScore = 0
function findScore(round: string) {
    const decrypted = myThrowArr.indexOf(round[2])
    const oppThrowIndex = oppThrowArr.indexOf(round[0])

    if (decrypted === 0) {
        // we need to lose
        if (oppThrowIndex === 0) totalScore += 3
        if (oppThrowIndex === 1) totalScore += 1
        if (oppThrowIndex === 2) totalScore += 2

    } else if (decrypted === 1) {
        totalScore += drawScore
        totalScore += oppThrowIndex + 1

    } else {
        totalScore += winScore
        if (oppThrowIndex === 0) totalScore += 2
        if (oppThrowIndex === 1) totalScore += 3
        if (oppThrowIndex === 2) totalScore += 1
    }
}
text.forEach((round) => {
    findScore(round)
})

console.log(totalScore)
