// index.ts
import Blockchain from './Blockchain';
import Block from './Block';

// ファイルからブロックチェーンを読み込む、もしくは新しいインスタンスを作成
let myBlockchain = Blockchain.loadFromFile();

console.log("Creating some blocks...");
myBlockchain.addBlock(new Block(1, new Date().toISOString(), { amount: 50 }));
myBlockchain.addBlock(new Block(2, new Date().toISOString(), { amount: 30 }));

// 更新されたブロックチェーンを保存
myBlockchain.saveToFile();

console.log("Blockchain:");
console.log(JSON.stringify(myBlockchain, null, 2));

import * as fs from "fs";

try {
  fs.writeFileSync('test.json', JSON.stringify({ test: "Hello, World!" }));
  console.log("File written successfully.");
} catch (error) {
  console.error("Error writing file:", error);
}
