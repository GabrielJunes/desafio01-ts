import { DioAccount } from "./DioAccount"

export class OtherAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositAddingTen = (value: number): void => {
        this.deposit(value + 10)
    }
}