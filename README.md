# Doragon-RH Portfolio

Doragon-RHの個人ポートフォリオサイトです。大学院での学習、ソフトウェア開発、AI・機械学習、GitHubでのプロジェクトや技術活動に加え、今後取り組むFinancial Planning（FP相談）について紹介します。

## 使用技術

- Next.js（Pages Router）
- React 18 / TypeScript
- MUI / Emotion

## 主なページ

- `/` - Home / About / Skills / Projects / Research / Experience / Financial Planning / Contact
- `/financial-planning` - FP資格の現在地、相談開始後に予定している内容、相談形式、扱う範囲

Financial Planningページは現在「準備中」として公開し、FP3級取得済み・FP2級取得に向けて学習中であることを明示しています。FP2級取得後に相談受付を開始する想定です。

## ローカルで起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。公開用ビルドは次のコマンドで確認できます。

```bash
npm run typecheck
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
  index.tsx                # メインのポートフォリオページ
  financial-planning.tsx   # FP相談準備ページ
  _app.tsx                 # Next.jsアプリ共通設定
components/
  layout.tsx               # 共通レイアウトとレスポンシブナビゲーション
public/images/             # プロフィール画像などの静的ファイル
.github/workflows/         # GitHub ActionsによるCI
```

## Financial Planningの更新方針

FP相談ページでは、現在の資格状況とサービス開始前であることを事実ベースで表示します。

現時点:
- FP3級取得済み
- FP2級取得に向けて学習中
- FP相談サービスは準備中

FP2級取得後に、相談受付状況、正式な料金、予約導線などを更新します。サービス開始後の最初の5名程度は、相談後アンケートに協力いただける方を対象とした初期モニターとして、大幅割引・料金応相談を想定しています。個別具体的な税務判断や特定金融商品の売買推奨を提供するサービスとしては表示しません。

## 更新方針

プロジェクト情報や研究内容、FP資格・相談状況は、公開できる事実を確認してから更新します。未確定の研究内容・連絡先・デプロイURL・料金等は推測で補完しません。
