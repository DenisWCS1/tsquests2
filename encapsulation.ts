import * as assert from 'assert';

class BankCustomer {
    private userName: string;
    private cardNumber: string;
    constructor(userName: string, cardNumber: string) {
        this.userName = userName;
        this.cardNumber = cardNumber;
    }
    public getName(): string {
        return this.userName;
    }

    public verifyPinInput(card: string): boolean {
        return card === this.cardNumber ? true : false;
    }
}

const customer = new BankCustomer('John Doe', '3579');
assert.strictEqual(typeof customer.getName, 'function');
assert.strictEqual(typeof customer.verifyPinInput, 'function');
assert.strictEqual(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));


console.log("username", customer.getName())
console.log("userCard Number", customer.verifyPinInput('3579'))
