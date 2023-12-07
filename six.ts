import {readFile} from "fs/promises";

(async () => {
	let f = await readFile("isix")
	f = f.toString()
	f = f.split("\n")
	let f1 = f[0].split(" ").filter(e => e != "")
	let f2 = f[1].split(" ").filter(e => e != "")

	if(f1.length != f2.length){
		console.log(f1,f2)
		throw new Error("input size not same")
	}

})()
