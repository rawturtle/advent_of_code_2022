import fs from "fs";

//https://adventofcode.com/2022/day/7
const text = fs.readFileSync('../inputs/day7.txt', 'utf-8')
    .trim()
    .split('\r\n')

function part1(): { [key: string]: number } {
    const folders: { [key: string]: number } = {}
    let currentPath: string[] = []
    text.forEach((line) => {
        const splitLine = line.trim().split(/\s/)
        if (splitLine[0] === '$') {
            if (splitLine[1] === "cd") {
                if (splitLine[2] == "/") currentPath = ["/"]
                else if (splitLine[2] == "..") currentPath.pop()
                else currentPath.push(splitLine[2])

            } else if (splitLine[1] == "ls") {
                // list current directory, do nothing
            }
        } else if (splitLine[0] == "dir") {
            // it's a directory, do nothing
        } else {
            // add to each folder in the current paths total value
            let key = ""
            for (const folder of currentPath) {
                key += folder
                // add to total or initialize
                folders[key] = folders[key] + +splitLine[0] || +splitLine[0]
            }
        }
    })
    return folders
}
// 1581595
// got stuck because keys aren't unique :() - rough to debug

const folders = part1()
const maxSize = 100000
const total = Object.values(folders)
    .filter((folderSize) => folderSize <= maxSize)
    .reduce((acc, folderSize) => acc + folderSize, 0)

console.log(total)


function part2() {
    const requiredSpace = 30000000
    const totalSpace = 70000000
    const rootFolderSize = folders['/']
    const spaceAvailable = totalSpace - rootFolderSize

    const rightSizeFolders = Object.values(folders)
    const contenders = rightSizeFolders.filter((folder) => {
        if (spaceAvailable + folder >= requiredSpace) return folder
    }).sort((a, b) => a-b)

    console.log(contenders[0])
}

part2()
