# Doragon-RH introduction

Doragon-RHの個人ポートフォリオサイトです。大学院での学習、ソフトウェア開発、AI・機械学習への関心、GitHubでのプロジェクトや技術活動を紹介します。

## 使用技術

- Next.js（Pages Router）
- React 18 / TypeScript
- MUI / Emotion

## ローカルで起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。公開用ビルドは次のコマンドで確認できます。

```bash
npm run build
npm start
```

## CI/CD

- Pull Requestと `master` へのpushで、GitHub Actionsが依存関係のインストール、TypeScriptの型チェック、Next.jsビルドを実行します。
- デプロイはVercelで行います。GitHubリポジトリをVercelにImportし、Production Branchに `master` を設定してください。

デプロイ先: VercelのプロジェクトURL（公開後に追記）

## ディレクトリ構成

```text
pages/
	index.tsx          # Home / About / Skills / Projects / Research / Experience / Contact
	_app.tsx           # Next.jsアプリ共通設定
components/
	layout.tsx         # 共通レイアウトとレスポンシブナビゲーション
public/images/       # プロフィール画像などの静的ファイル
.github/workflows/   # GitHub ActionsによるCI
```

## 更新方針

プロジェクト情報や研究内容は、公開できる事実を確認してから `pages/index.tsx` に追加します。未確定の研究内容・連絡先・デプロイURLはTODOとして管理し、推測で補完しません。
