export const GenNonDuplicateID = (randomLength: number = 16) => {
	return Number(
		Math.random().toString().substr(3, randomLength) + Date.now()
	).toString(36);
};
