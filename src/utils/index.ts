/**
 * 用于创建随机id
 *
 * @format
 * @param randomLength 随机数长度控制
 */

export const GenNonDuplicateID = (randomLength: number = 16) => {
	return Number(Math.random().toString().substr(3, randomLength) + Date.now()).toString(36)
}
