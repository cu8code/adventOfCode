import { readFile } from "fs/promises"

type position = {
    x: number,
    y: number
}

const right: position = {
    x: 1,
    y: 0
}

const left: position = {
    x: -1,
    y: 0
}

const up: position = {
    x: 0,
    y: -1
}

const down: position = {
    x: 0,
    y: 1
}

const top_right: position = {
    x: 1,
    y: 1
}

const top_left: position = {
    x: -1,
    y: 1
}

const bottom_right: position = {
    x: 1,
    y: -1
}

const bottom_left: position = {
    x: 1,
    y: 1
}

const addPos = (a: position, b: position) => {
    return {
        x: (a.x + b.x),
        y: (a.y + b.y)
    }
}

const isDigit = (s: string) => 48 <= s.charCodeAt(0) && s.charCodeAt(0) >= 57
const isSymbol = (s: string) => 35 <= s.charCodeAt(0) && s.charCodeAt(0) >= 45

const main = async () => {
    const b = await readFile("ithree")
    const s = b.toString()

    const number_b: position[] = []
    const symbol_b: position[] = []

    const extract = (s: string) => {
        const temp = s.split("\n")
        const matrix: string[][] = []
        temp.forEach((e) => { matrix.push(e.split("").filter(e => e != "")) })
        console.log(matrix);
        return matrix
    }

    const m = extract(s)

    for (let y = 0; y < m.length; y++) {
        for (let x = 0; x < m[y].length; x++) {
            if (isDigit(s[y][x])) {
                number_b.push({ x, y })
            }
            else if (isSymbol(s[y][x])) {
                symbol_b.push({ x, y })
            }
        }
    }
    let i = 0;
    let flush = false
    let fs = ""
    while (true) {
        let next = symbol_b[i++]
        let c = symbol_b[i]
        let r = addPos(c, right)
        let u = addPos(c, up)
        let d = addPos(c, down)

        let t_r = addPos(c, top_right)
        let b_r = addPos(c, bottom_right)
        if (r !== next || r !== next || d !== next)
            flush = true
        if (t_r !== next || b_r !== next)
            flush = true
        i++
    }
}

main()