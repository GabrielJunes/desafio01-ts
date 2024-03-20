export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = value
      console.log(`Deposito realizado. Saldo em conta R$: ${this.balance}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance > value){
      this.balance = this.balance - value
      console.log(`Saque realizado. Saldo em conta R$ ${this.balance}`)
    }
  }

  getBalance = (): void => {
    console.log(`Seu saldo é de R$: ${this.balance}`)
  }

   validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
