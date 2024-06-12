async function build() {
	// REACT BUNDLE
	//   const build = await Bun.build({
	//     entrypoints: ["./react/src/main.tsx"],
	//     outdir: "./build",
	//   })
	// EXPRESS BUNDLE commonjs
	//   await Bun.build({
	//     entrypoints: ["./express/index.js"],
	//     outdir: "./outcommonjs",
	//     target: "bun",
	//   })
	// EXPRESS BUNDLE esm
	//   await Bun.build({
	//     entrypoints: ["./express/index.js"],
	//     outdir: "./outesm",
	//     target: "bun",
	//   })
}

build();
