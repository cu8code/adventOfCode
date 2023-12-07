import { deepEqual } from "assert"

(async () => {
    const parse = (s: string) => {
        let p = []
        for (let index = 0; index < s.length; index++) {
            const element = s[index];
            if(!isNaN(parseInt(element))){

            }
            
        }
    }
    deepEqual(parse("467..114.."), ["467", ".", ".", "114", ".", "."])
    deepEqual(parse(".+.58."), [".", "+", ".", "58", "."])

    const extract = (s: string) => {
        const temp = s.split("\n")
        const matrix: string[][] = []
        temp.forEach((e) => { matrix.push(e.split("")) })
        for(let y = 0; y < matrix.length;y++){
            for(let x = 0; x < matrix[0].length;x++){

            }
        }
        return 4361
    }

    deepEqual(extract(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`), 4361)

})()