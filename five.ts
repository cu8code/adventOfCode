import { readFile } from "fs/promises";


type CMap<T,K> = {
    name:string,
    map: Map<T,K>
}

async function main() {

    const f = (await readFile("ifive")).toString()
    let lines = f.split("\n").filter(e => e!=="")

    let arr_seed = lines[0].slice(6,lines[0].length)
    let str_seed = arr_seed.split(" ").filter(e => e!=="")
    let num_seed = []

    for(let i=0;i<str_seed.length;i++){
        num_seed.push(parseInt(str_seed[i]))
    }
}

main()