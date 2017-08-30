/**
 * @param {string} target
 * @param {string} input
 * @param {boolean} ignoreCase
 * @returns {{ matched: boolean, char: string }[]}
 */
module.exports = (target, input, ignoreCase = false) => {
	const targetChars = [...target];
	const inputChars = [...(ignoreCase ? input.toLowerCase() : input)];

	let targetIndex = 0;
	const { length: targetLength } = targetChars;
	let inputIndex = 0;
	const output = [];

	while (targetIndex < targetLength) {
		const char = targetChars[targetIndex];

		if ((ignoreCase ? char.toLowerCase() : char) === inputChars[inputIndex]) {
			output.push({
				matched: true,
				char,
			});
			inputIndex += 1;
		} else {
			output.push({
				matched: false,
				char
			});
		}

		targetIndex += 1;
	}

	return output;
};