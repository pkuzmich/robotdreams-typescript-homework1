const userName: string = 'John Smith'
const birthDate: string | Date = '1980-01-01'
const phoneNumber: string | number = '123-456-7890'
const middleName: string | undefined = undefined
const lastVisitDate: Date | null = null

type User = {
  userName: string
  birthDate: string | Date
  phoneNumber: string | number
  middleName?: string
  lastVisitDate: Date | null
}

const printUserInfo = (userInfo: User): string => {
  const { userName, birthDate, phoneNumber, middleName, lastVisitDate } = userInfo

  return `User Info:
		FirstName: ${userName}
		Date of Birth: ${birthDate}
		Phone Number: ${phoneNumber}
		Middle Name: ${middleName || 'Not provided'}
		Last Visit Date: ${lastVisitDate || 'Never'}
	`
}

const user: User = {
  userName,
  birthDate,
  phoneNumber,
  lastVisitDate
}

console.log(printUserInfo(user))
