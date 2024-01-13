以前学習した内容に加えてMUIを学習し、自己紹介ページを作成していきたいと思います

MUIのインストール

npm install @mui/material @emotion/react @emotion/styled



ReactとReact-domもピアー依存関係

"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0"
},

:google web fonts CND

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/>

アイコンコンポーネント追加

npm install @mui/icons-material

headエレメントに追加

<meta name="viewport" content="initial-scale=1, width=device-width" />