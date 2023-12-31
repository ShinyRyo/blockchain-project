"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const Blockchain_1 = __importDefault(require("./Blockchain"));
const Block_1 = __importDefault(require("./Block"));
const myBlockchain = new Blockchain_1.default();
console.log("Creating some blocks...");
myBlockchain.addBlock(new Block_1.default(1, new Date().toISOString(), { amount: 50 }));
myBlockchain.addBlock(new Block_1.default(2, new Date().toISOString(), { amount: 30 }));
console.log("Blockchain:");
console.log(JSON.stringify(myBlockchain, null, 2));
