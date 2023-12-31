"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Blockchain.ts
const fs = __importStar(require("fs"));
const Block_1 = __importDefault(require("./Block"));
class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block_1.default(0, new Date().toISOString(), "Genesis Block", "0");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    // ブロックチェーンの状態をファイルに保存
    saveToFile() {
        fs.writeFileSync('blockchain.json', JSON.stringify(this, null, 2));
    }
    // ファイルからブロックチェーンを読み込む（静的メソッド）
    static loadFromFile() {
        if (fs.existsSync('blockchain.json')) {
            const data = fs.readFileSync('blockchain.json', 'utf8');
            const parsedData = JSON.parse(data);
            const blockchain = new Blockchain();
            blockchain.chain = parsedData.chain.map((block) => new Block_1.default(block.index, block.timestamp, block.data, block.previousHash));
            return blockchain;
        }
        else {
            // blockchain.json ファイルが存在しない場合
            const newBlockchain = new Blockchain();
            newBlockchain.saveToFile(); // 新しいブロックチェーンをファイルに保存
            return newBlockchain;
        }
    }
}
exports.default = Blockchain;
