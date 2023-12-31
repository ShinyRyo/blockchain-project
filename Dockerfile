# 使用するNode.jsのバージョンを指定
FROM node:16

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package*.json ./

# npm パッケージをインストール（プロジェクト依存関係にTypeScriptが含まれている場合はこれで十分）
RUN npm install

# ソースコードをコンテナ内にコピー
COPY . .

# TypeScript をコンパイル
RUN npm run build

# コンテナ起動時に実行されるコマンド
CMD ["node", "dist/index.js"]

