import fs from 'fs';
import path from 'path';

const text = fs.readFileSync(path.join(__dirname, '..', 'inputs', 'day1.txt'), 'utf-8')
    .trim()
    .split('\n\n')

const part1 =  text.map(line => line
    .split("\n")
    .reduce((acc, curr) => Number(acc) + Number(curr), 0))
    .sort((a, b) => a - b)
    .pop()

console.log(part1)

const part2 =  text.map(line=>line
    .split("\n")
    .reduce((acc, curr) => Number(acc) + Number(curr), 0))
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a,b)=> a + b)

console.log(part2)
