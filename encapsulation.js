"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(userName, cardNumber) {
        this.userName = userName;
        this.cardNumber = cardNumber;
    }
    BankCustomer.prototype.getName = function () {
        return this.userName;
    };
    BankCustomer.prototype.verifyPinInput = function (card) {
        return card === this.cardNumber ? true : false;
    };
    return BankCustomer;
}());
var customer = new BankCustomer('John Doe', '3579');
assert.strictEqual(typeof customer.getName, 'function');
assert.strictEqual(typeof customer.verifyPinInput, 'function');
assert.strictEqual(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
console.log("username", customer.getName());
console.log("userCard Number", customer.verifyPinInput('3579'));
