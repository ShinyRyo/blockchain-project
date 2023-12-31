// Blockchain.ts
import * as fs from "fs";
import Block from './Block';

class Blockchain {
    public chain: Block[];

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(): Block {
        return new Block(0, new Date().toISOString(), "Genesis Block", "0");
    }

    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock: Block): void {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    // ブロックチェーンの状態をファイルに保存
    saveToFile() {
        fs.writeFileSync('blockchain.json', JSON.stringify(this, null, 2));
    }
    // ファイルからブロックチェーンを読み込む（静的メソッド）
    static loadFromFile(): Blockchain {
        if (fs.existsSync('blockchain.json')) {
            const data = fs.readFileSync('blockchain.json', 'utf8');
            const parsedData = JSON.parse(data);
            const blockchain = new Blockchain();
            blockchain.chain = parsedData.chain.map((block: any) =>
                new Block(block.index, block.timestamp, block.data, block.previousHash)
            );
            return blockchain;
        }
        return new Blockchain();
    }
}

export default Blockchain;
