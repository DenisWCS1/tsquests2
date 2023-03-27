import * as assert from 'assert';

class BankCustomer {
    private userName: string;
    constructor(userName: string, cardNumber: string) {
        this.userName = userName;

    }
    public getName(): string {
        return this.userName;
    }

    public verifyPinInput(cardNumber: string): boolean {
        return cardNumber === '3579' ? true : false;
    }
}

const customer = new BankCustomer('John Doe', '3579');
assert.strictEqual(typeof customer.getName, 'function');
assert.strictEqual(typeof customer.verifyPinInput, 'function');
assert.strictEqual(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));


console.log("username", customer.getName())
console.log("userCard Number", customer.verifyPinInput('3579'))
