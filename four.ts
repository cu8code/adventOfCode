import { readFile } from "fs/promises";
import { deepEqual } from "assert";

async function main() {
    const f = await readFile("ifour")
    const s = f.toString()
    const l = s.split("\n")
    let sum = 0
    
    const ext = (s: string, d: string) => {
        let count = 0
        const ds = s.split(" ").filter(e => e !== "")
        const dd = d.split(" ").filter(e => e !== "")
        for (const i of ds)
            for (const j of dd) {
                if (i === j) {
                    count = count === 0 ? 1 : count * 2
                }
            }

        return count
    }
    for(const ll of l){
        const g = ll.split("|")
        sum+=ext(g[0],g[1])
    }

    deepEqual(ext("41 48 83 86 17", "83 86  6 31 17  9 48 53"), 8)
    console.log(sum);
    
}
main()