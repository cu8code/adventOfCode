import { deepEqual } from "assert"
import { readFile } from "fs/promises"

(async () => {
    function extract(s: string) {
        let start = -1
        let end = s.length
        let t = null
        let y = null

        while (start !== end) {
            if (t === null) {
                start++
                if (!isNaN(parseInt(s[start]))) {
                    t = parseInt(s[start])
                }
            }
            if (y === null) {
                end--
                if (!isNaN(parseInt(s[end]))) {
                    y = parseInt(s[end])
                }
            }

            if (t !== null && y !== null) {
                break
            }
        }

        if (t === null || y === null) {
            throw new Error("null")
        }
        return t * 10 + y
    }
    deepEqual(extract("1abc2"), 12)
    deepEqual(extract("pqr3stu8vwx"), 38)
    deepEqual(extract("a1b2c3d4e5f"), 15)
    deepEqual(extract("treb7uchet"), 77)

    const s = (await readFile("ione")).toString()
    let sum = 0
    for (const i of s.split("\n")) {
        if (i === "") {
            continue
        }
        sum += extract(i)
    }
    console.log(sum);
})()