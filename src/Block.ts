// Block.ts
import * as crypto from "crypto";

class Block {
    public index: number;
    public timestamp: string;
    public data: any;
    public previousHash: string;
    public hash: string;

    constructor(index: number, timestamp: string, data: any, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(): string {
        const hash = crypto.createHash('sha256');
        hash.update(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash);
        return hash.digest('hex');
    }
}

export default Block;
