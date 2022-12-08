//https://adventofcode.com/2022/day/8
import fs from "fs";

const text = fs.readFileSync('../inputs/day8.txt', 'utf-8')
    .split('\r\n')

function part1() {
    let totalVisible = 0
    for(let row = 0; row < text.length; row++) {
        for(let col = 0; col < text[row].length; col++) {
            // on edge
            if (row === 0 || col === 0 || col === text[row].length -1 || row === text.length -1) {
                totalVisible++
                continue
            }

            // check left
            let visibleFlag = true
            for (let colIndex = 0; colIndex < col; colIndex++) {
                if (text[row][colIndex] >= text[row][col]) visibleFlag = false
            }
            if (visibleFlag) {
                totalVisible++
                continue
            }

            // check right
            visibleFlag = true
            for (let colIndex = col + 1; colIndex < text[row].length; colIndex++) {
                if (text[row][colIndex] >= text[row][col]) visibleFlag = false
            }
            if (visibleFlag) {
                totalVisible++
                continue
            }

            // check above
            visibleFlag = true
            for(let rowPrev = 0; rowPrev < row; rowPrev++) {
                if (text[rowPrev][col] >= text[row][col]) visibleFlag = false
            }
            if (visibleFlag) {
                totalVisible++
                continue
            }

            //check bottom
            visibleFlag = true
            for (let rowIndex = row + 1; rowIndex < text.length; rowIndex++) {
                if (text[rowIndex][col] >= text[row][col]) visibleFlag = false
            }
            if (visibleFlag) {
                totalVisible++
            }
        }
    }
    console.log(totalVisible)
}

function part2() {
    let topScore = 0
    for(let row = 1; row < text.length -1; row++) {
        for(let col = 1; col < text[row].length -1; col++) {
            // check above
            let above = 0
            for (let rowPrev = row -1; rowPrev >= 0; rowPrev--) {
                above++
                if (text[rowPrev][col] >= text[row][col]) break
            }

            let left = 0
            // check left
            for (let colIndex = col -1; colIndex >= 0; colIndex--) {
                left++
                if (text[row][colIndex] >= text[row][col]) break
            }

            // check right
            let right = 0
            for (let colIndex = col + 1; colIndex < text[row].length; colIndex++) {
                right++
                if (text[row][colIndex] >= text[row][col]) break
            }

            //check bottom
            let below = 0
            for (let rowIndex = row + 1; rowIndex < text.length; rowIndex++) {
                below++
                if (text[rowIndex][col] >= text[row][col]) break
            }

            let roundScore = above * left * right * below
            if (roundScore > topScore) topScore = roundScore
        }
    }
    console.log(topScore)
}
part1()
//1669
part2()
//331344