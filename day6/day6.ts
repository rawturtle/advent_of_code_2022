import fs from "fs";
import path from "path";

const text = fs.readFileSync(path.join(__dirname, '..', 'inputs', 'day6.txt'), 'utf-8')
    .trim()


function part1() {
    let index = 0
    while (index < text.length) {
        const set = new Set(text.substring(index, index + 4).split(""))
        if (set.size === 4) break
        index++
    }
    console.log(index+4)
}


function part2() {
    let index = 0
    while (index < text.length) {
        const set = new Set(text.substring(index, index + 14).split(""))
        if (set.size === 14) break
        index++
    }
    console.log(index+14)
}

part1()
part2()
