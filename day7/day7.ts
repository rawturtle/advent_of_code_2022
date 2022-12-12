import fs from "fs";

//https://adventofcode.com/2022/day/7
const text = fs.readFileSync('../inputs/day7.txt', 'utf-8')
    .trim()
    .split('\r\n')

const folders: {[key: string]: number} = {}
let currentPath: string[] = []

text.forEach((line) => {
    const splitLine = line.trim().split(/\s/)
    if (splitLine[0] === '$') {
        if (splitLine[1] === "cd") {
            if (splitLine[2] == "/") currentPath = []
            else if (splitLine[2] == "..") currentPath.pop()
            else currentPath.push(splitLine[2])

        } else if (splitLine[1] == "ls") {
            // list current directory, do nothing
        }
    } else if (splitLine[0] == "dir") {
        // it's a directory, do nothing
    } else {
        // add to each folder in the current paths total value
        for(const folder of currentPath) {
            folders[folder] = folders[folder] + +splitLine[0] || +splitLine[0]
        }
    }
})

const maxSize = 100000
const total = Object.values(folders)
    .filter((folderSize) => folderSize <= maxSize)
    .reduce((acc, folderSize) => acc + folderSize, 0)

console.log(folders)
console.log(total)
// low 1324537
//     1642503

// missing 317966
