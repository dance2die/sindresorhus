#!/usr/bin/env node
"use strict";
const path = require("path");
const meow = require("meow");
const termImg = require("term-img");
const terminalImage = require("terminal-image");
const importJsx = require("import-jsx");
const { h, render } = require("ink");

const ui = importJsx("./ui");

meow(`
	Usage
	  $ sung
`);

const fallback = async () => {
	const image = await terminalImage.file(
		path.join(__dirname, "avatar-fallback.png")
	);
	console.log(image);
};

const width = "33%";
const height = "33%";
termImg(path.join(__dirname, "avatar.png"), { fallback, width, height });

render(h(ui));
