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
	let matched = false;
	const results = [];

	while (targetIndex < targetLength) {
		const char = targetChars[targetIndex];

		if ((ignoreCase ? char.toLowerCase() : char) === inputChars[inputIndex]) {
			results.push({
				matched: true,
				char,
			});
			matched = true;
			inputIndex += 1;
		} else {
			results.push({
				matched: false,
				char
			});
		}

		targetIndex += 1;
	}

	return {
		matched,
		results
	};
};
