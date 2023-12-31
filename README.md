# blockchain-project

このプロジェクトは、TypeScript と Node.js を使用したシンプルなブロックチェーンの実装です。

## 説明

ブロックチェーンは、データを安全かつ検証可能な方法で保存するための分散型台帳です。このプロジェクトは、ブロックを作成し、それらをブロックチェーンに追加し、台帳の整合性を保証するという、ブロックチェーンの基本原則を示しています。

## はじめに

### 依存関係

- Node.js (LTS バージョン)
- Docker

### インストール

- リポジトリをクローンします。
- `npm install` を使用して必要な Node.js パッケージをインストールします。

### プログラムの実行

- `npm run build` を実行して TypeScript ファイルを JavaScript にコンパイルします。
- `npm start` もしくは `node dist/index.js` を使用してアプリケーションを開始します。

## Docker コンテナ

Docker コンテナ内でアプリケーションをビルドして実行するには、次の手順に従います。

```bash
docker build -t blockchain-app .
docker run -d blockchain-app

プロジェクトに提供された Dockerfile は、環境をセットアップし、依存関係をインストールし、TypeScript アプリケーションをコンパイルし、ブロックチェーンを開始します。