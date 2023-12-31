# 使用するNode.jsのバージョンを指定
FROM node:16

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# パッケージ.jsonとパッケージロックファイルをコピー
COPY package*.json ./

# npmパッケージをインストール
RUN npm install

# TypeScriptをグローバルにインストール
RUN npm install -g typescript

# ソースコードをコンテナ内にコピー
COPY . .

# ポート3000を開放（必要に応じて変更）
EXPOSE 3000

# コンテナ起動時に実行されるコマンド
CMD ["node", "index.js"]
