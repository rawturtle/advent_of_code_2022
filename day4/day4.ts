import fs from "fs";

//https://adventofcode.com/2022/day/4
const text = fs.readFileSync('../inputs/day4.txt', 'utf-8')
    .trim()
    .split('\r\n')
function part1(assignments: string[]) {
    let total = 0
    assignments.map((assigned) => {
        const range = assigned.split(",").map((item ) => item.split("-"))
        const start1 = +range[0][0]
        const end1 = +range[0][1]
        const start2 = +range[1][0]
        const end2 = +range[1][1]

        if (start1 >= start2 && end1 <= end2) {
            total += 1
        } else if (start2 >= start1 && end2 <= end1) {
            total += 1
        }
    })
    console.log(total)
}
function part2(assignments: string[]) {
    let total = 0
    assignments.map((assigned) => {
        const range = assigned.split(",").map((item ) => item.split("-"))
        const start1 = +range[0][0]
        const end1 = +range[0][1]
        const start2 = +range[1][0]
        const end2 = +range[1][1]

        if (start1 <= start2 && end1 >= start2) {
            total += 1
        } else if (start2 <= start1 && end2 >= start1) {
            total += 1
            return
        }
    })
    console.log(total)
}

part1(text)
// 569
part2(text)
// 936

// Pretty ugly solution. Tried playing around with ranges before realising they weren't required

// cool way to split text I read after
// text.split(`\n`).map(r=>r.split(/-|,/).map(i=>+i))

