const name: string = "John Smith"
const dateOfBirth: string | Date = "1980-01-01"
const phoneNumber: string | number = "123-456-7890"
const workPosition: null = null
const address: undefined = undefined

const printUserInfo = (
	userName: string,
	dateOfBirth: string | Date,
	phoneNumber: string | number,
	workPosition: null | undefined
): string => {
	return `User Info:
	Name: ${userName}
	Date of Birth: ${dateOfBirth}
	Phone Number: ${phoneNumber}
	Work Position: ${workPosition}`
}

console.log(printUserInfo(name, dateOfBirth, phoneNumber, workPosition))
