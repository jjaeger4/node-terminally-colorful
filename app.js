const tc = {
	fg: {
		black: 30,
		red: 31,
		green: 32,
		yellow: 33,
		blue: 34,
		magenta: 35,
		cyan: 36,
		white: 37
	},
	bg: {
		black: 40,
		red: 41,
		green: 42,
		yellow: 43,
		blue: 44,
		magenta: 45,
		cyan: 46,
		white: 47
	},
	reset: function() {
		return '\x1b[0m';
	}
}

exports.color = (f,b,bold,text) => {
	if(bold) {
		return '\x1b[1m\x1b[' + tc.fg[f] + 'm\x1b[' + tc.bg[b] + 'm' + text + tc.reset();
	} else {
		return '\x1b[2m\x1b[' + tc.fg[f] + 'm\x1b[' + tc.bg[b] + 'm' + text + tc.reset();
	}
}