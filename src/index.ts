// index.ts
import Blockchain from './Blockchain';
import Block from './Block';

const myBlockchain = new Blockchain();

console.log("Creating some blocks...");
myBlockchain.addBlock(new Block(1, new Date().toISOString(), { amount: 50 }));
myBlockchain.addBlock(new Block(2, new Date().toISOString(), { amount: 30 }));

console.log("Blockchain:");
console.log(JSON.stringify(myBlockchain, null, 2));
