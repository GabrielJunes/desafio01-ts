import { CompanyAccount } from './class/CompanyAccount'
import { OtherAccount } from './class/OtherAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriel', 7)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const otherAccount: OtherAccount = new OtherAccount('User', 17)

console.log(peopleAccount)
peopleAccount.getName()
peopleAccount.deposit(100)
peopleAccount.withdraw(25)
peopleAccount.getBalance()

console.log(companyAccount)
companyAccount.getLoan(800)

console.log(otherAccount)
otherAccount.depositAddingTen(100)
otherAccount.getBalance()
