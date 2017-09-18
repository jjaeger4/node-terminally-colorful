exports['terminally-colorful'] = {
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
	reset: 0,
	color: function(f,b,bold,text) {
		if(bold) {
			return '\x1b[1m\x1b[' + this.fg[f] + 'm\x1b[' + this.bg[b] + 'm' + text + this.reset();
		} else {
			return '\x1b[2m\x1b[' + this.fg[f] + 'm\x1b[' + this.bg[b] + 'm' + text + this.reset();
		}
	},
	reset: function() {
		return '\x1b[0m';
	}
}