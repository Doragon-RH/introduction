# Doragon-RH Portfolio

Doragon-RHの個人ポートフォリオサイトです。大学院での学習、ソフトウェア開発、AI・機械学習、GitHubでのプロジェクトや技術活動に加え、今後取り組むFinancial Planning（FP相談）について紹介します。

## 使用技術

- Next.js（Pages Router）
- React 18 / TypeScript
- MUI / Emotion

## 主なページ

- `/` - Home / About / Skills / Projects / Research / Experience / Financial Planning / Contact
- `/financial-planning` - FP資格の現在地、相談開始後に予定している内容、相談形式、扱う範囲
- `/work` - Web開発・AI/機械学習・データ活用などのお仕事相談。まずは無料相談から受付

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
  work.tsx                 # 技術・開発のお仕事相談ページ
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


## お問い合わせフォーム

お仕事・技術相談の問い合わせは、サイト上にメールアドレスを直接公開せず、専用フォームから受け付けます。

フォームでは以下の情報を取得します。

- 姓・名
- 個人 / 法人
- 会社名・団体名（法人を選択した場合に入力）
- 相談カテゴリ
- 問い合わせ内容
- 希望する連絡手段
- 連絡先
- 個人情報の取り扱いへの同意

入力された個人情報は、お問い合わせへの回答および必要な連絡のためにのみ利用します。目的達成後は必要以上に長期間保管せず、定期的に不要な送信データを削除する運用とします。法令に基づく場合を除き、第三者への提供は行いません。


問い合わせフォームへのリンクは、トップページだけでなく全ページ共通のフッターにも表示し、どのページからでもアクセスできるようにします。


## Security / Dependency Maintenance

- Dependabot checks npm dependencies and GitHub Actions weekly and opens update pull requests.
- Minor/patch version updates are grouped to reduce maintenance overhead; major updates remain separate for safer review.
- Pull requests that introduce a dependency with a high-or-critical known vulnerability are checked by Dependency Review.
- CodeQL scans the JavaScript/TypeScript codebase on pushes to `master` and on a weekly schedule.
- CI uses a maintained Node.js LTS release via `.nvmrc`.
- Security-sensitive framework major upgrades are handled in dedicated pull requests rather than being mixed with routine maintenance.
