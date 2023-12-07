const assert = require("assert")
const fs = require("fs/promises")

const main = async () => {
	const extractor1 = (s: string) => {
		// red green blue
		const obj = {
			green: 0,
			blue: 0,
			red: 0,
		}
		for (const j of s.split(",")) {
			if (/red/.test(j)) {
				let out = j.match(/\d+/)
				if (out === null) {
					throw new Error("null")
				}
				let output = parseFloat(out[0])
				obj["red"] += output
			}
			if (/blue/.test(j)) {
				let out = j.match(/\d+/)
				if (out === null) {
					throw new Error("null")
				}
				let output = parseFloat(out[0])
				obj["blue"] += output
			}
			if (/green/.test(j)) {
				let out = j.match(/\d+/)
				if (out === null) {
					throw new Error("null")
				}
				let output = parseFloat(out[0])
				obj["green"] += output
			}
		}
		return obj
	}

	assert.deepEqual(
		extractor1("1 green, 5 blue, 11 red")
		, {
			green: 1,
			blue: 5,
			red: 11,
		}
	)

	const extractor2 = (s: string, e: { green: number, blue: number, red: number }) => {
		console.log(e.green, e.blue, e.red);

		const ds = s.slice(7, s.length).split(";")
		let isValid = true
		for (const j of ds) {
			const k = extractor1(j)
			if (e.green < k.green) {
				console.log(e.green, k.green, "green");
				isValid = false
			}
			if (e.blue < k.blue) {
				console.log(e.blue, k.blue, "blue");
				isValid = false
			}
			if (e.red < k.red) {
				console.log(e.red, k.red, "red");
				isValid = false
			}
		}
		const j = s.match(/\d+/)
		if (j === null) {
			console.log({ s });
			throw new Error("null");
		}
		const id = parseFloat(j[0])
		console.log(isValid);

		return {
			valid: isValid,
			id: id
		}
	}

	assert.deepEqual(
		extractor2(
			"Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
			{
				red: 12,
				green: 13,
				blue: 14
			}
		)
		, {
			valid: true,
			id: 1
		}
	)

	const file = (await fs.readFile("isecond")).toString()
	let sum = 0
	for (const l of file.split("\n")) {
		if (l === "") {
			continue
		}
		const e = extractor2(l, {
			red:12,
			green: 13,
			blue: 14
		})
		if (isNaN(e.id)) {
			continue
		}
		if (e.valid) {
			sum += e.id
		}
		// console.log(e);
	}
	console.log(sum)
}

main()

