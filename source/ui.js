/** @jsx h */
'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	// {
	// 	label: 'Website',
	// 	url: 'http://donavon.com'
	// },
	{
		label: 'Twitter',
		url: 'https://twitter.com/donavon'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/donavon'
	},
	{
		label: 'Articles on Medium',
		url: 'https://medium.com/@donavon'
	},
	{
		label: 'Articles on the AmericanExpress.io',
		url: 'http://americanexpress.io'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m rather fond of a dry Riesling.</Text>
		</div>
		<div>
			<Text>I also tell people that I know how to code using React.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
