import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

const technicalExperiences = [
  {
    title: 'Full-stack Web Application Development',
    period: '約2年',
    description:
      'Next.jsとRuby on Railsを中心に、5〜10人程度のチームでWebアプリケーション開発を経験しています。フロントエンド実装、API設計・実装、DB設計、認証、テスト、CI/CD、保守・改修まで担当し、必要なライブラリの調査・比較・選定から実装まで行ってきました。本番リリース、コードレビュー、要件整理を除く幅広い開発工程を経験しています。プロジェクト期間は約2か月〜1年で、担当機能は概算20件以上、不具合修正・対応は累計100件以上です。',
    skills: ['Next.js', 'React', 'TypeScript', 'Ruby on Rails', 'MySQL', 'Redis', 'REST API', 'Docker', 'CI/CD'],
  },
  {
    title: 'Frontend Development',
    period: '約2年',
    description:
      'Next.jsではPages RouterとApp Routerの両方を利用し、React / TypeScriptを中心に画面実装、API連携、SSR / SSGを経験しています。UI実装ではMUIとTailwind CSSの両方を使用してきました。',
    skills: ['Next.js', 'Pages Router', 'App Router', 'React', 'TypeScript', 'MUI', 'Tailwind CSS', 'SSR', 'SSG'],
  },
  {
    title: 'Internal Workflow Automation',
    period: '約1年',
    description:
      '社内の定型作業を対象に、Google Apps Script、Google スプレッドシート、Slack連携、データ集計の自動化を行いました。またPythonを用いて、規則に沿ったファイル名変更、教材内リンクの生成、Excel操作など、それまで手作業だった処理を自動化しました。自動化コードの実装時間を除いた日常作業では、作業時間を概算で60%以上削減できたと見積もっています。主に2人程度で作業し、繰り返し発生する負担の大きい作業をコードへ置き換えることを重視しました。',
    skills: ['Python', 'Google Apps Script', 'Google Sheets', 'Slack Integration', 'Excel Automation', 'Data Automation'],
  },
  {
    title: 'QA / Learning Content Maintenance',
    period: '約1年',
    description:
      'プログラミングスクールの運営に関わり、受講者からのQA対応を行いました。あわせて、教材で利用するコードの不具合や分かりにくい箇所を確認し、必要に応じて教材コードを修正しました。',
    skills: ['QA', 'Debugging', 'Code Maintenance', 'Technical Support'],
  },
  {
    title: 'AI / Machine Learning',
    period: '2026/08 - 現在',
    description:
      '画像異常検知をテーマに、VAEの学習・推論・評価まで一連の実装を経験しています。PyTorch / PyTorch Lightningを用いた学習処理、チェックポイントからのテスト、再構成誤差を用いた異常判定、Accuracy・Precision・Recall・F1・Confusion Matrixによる評価、元画像・再構成画像・差分・ヒートマップの可視化まで取り組んでいます。',
    skills: ['Python', 'PyTorch', 'PyTorch Lightning', 'TensorBoard', 'Docker', 'Model Evaluation'],
  },
];

const consultationAreas = [
  {
    title: 'Web開発',
    description: 'Webアプリケーションの開発、既存機能の改善、フロントエンド・バックエンド実装などについてご相談いただけます。',
    icon: <CodeOutlinedIcon />,
  },
  {
    title: 'AI / Machine Learning',
    description: '機械学習を活用したプロトタイプ、画像処理、AI機能の組み込みなどについて、実現方法から一緒に整理します。',
    icon: <PsychologyOutlinedIcon />,
  },
  {
    title: 'データ活用・業務改善',
    description: 'Pythonなどを利用したデータ処理、自動化、業務上の課題を技術で改善する方法についてご相談いただけます。',
    icon: <AnalyticsOutlinedIcon />,
  },
  {
    title: 'Cloud / Infrastructure',
    description: 'AWS・GCP・Dockerなどの利用経験をもとに、対応可能な範囲でクラウドや実行環境についてもご相談をお受けします。',
    icon: <CloudOutlinedIcon />,
  },
];

export default function Work() {
  return (
    <Layout home={0}>
      <Head>
        <title>Work / Consultation | {siteTitle}</title>
        <meta
          name="description"
          content="Web開発、AI・機械学習、データ活用などの技術相談・開発依頼について、まずは無料相談から受け付けています。"
        />
      </Head>

      <Box component="section" sx={{ py: { xs: 2, sm: 4 } }}>
        <Chip label="Work / Consultation" color="primary" variant="outlined" sx={{ mb: 2 }} />
        <Typography component="h1" sx={{ fontSize: { xs: '2rem', sm: '2.6rem' }, fontWeight: 700, lineHeight: 1.2, mb: 2 }}>
          技術でできることを、一緒に整理します。
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.9, maxWidth: 720 }}>
          Web開発、AI・機械学習、データ活用など、これまで培ってきたスキルを活かしたお仕事のご相談を受け付けています。
          具体的な仕様が決まっていない段階でも、まずは無料相談から課題や目的を整理します。
        </Typography>
      </Box>

      <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: 'rgba(23, 63, 53, 0.06)', border: '1px solid', borderColor: 'divider', mb: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 1 }}>
          まずは無料相談から
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          「こういうことはできるか」「業務をもう少し効率化したい」「AIを使えるか知りたい」といった段階でも構いません。
          ご相談内容を確認したうえで、対応可能か、どのような進め方がよいか、費用が発生する場合はその範囲を整理します。
        </Typography>
      </Box>

      <Divider />

      <Box id="technical-experience" component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1 }}>
          Technical Experience
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
          研究・開発・就業経験のうち、実際に担当した工程、利用技術、経験期間、改善実績が分かる形でまとめています。企業名や非公開情報は掲載していません。
        </Typography>
        <Stack spacing={2}>
          {technicalExperiences.map((experience) => (
            <Box
              key={experience.title}
              sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.paper' }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={1}>
                <Typography component="h3" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                  {experience.title}
                </Typography>
                <Chip label={experience.period} size="small" variant="outlined" />
              </Stack>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, my: 1.5 }}>
                {experience.description}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={0.75}>
                {experience.skills.map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          ご相談いただける内容
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mt: 3 }}>
          {consultationAreas.map((area) => (
            <Box key={area.title} sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.paper' }}>
              <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1 }}>
                {area.icon}
                <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  {area.title}
                </Typography>
              </Stack>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                {area.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          ご相談からの流れ
        </Typography>
        <Box component="ol" sx={{ lineHeight: 2, pl: 3 }}>
          <li>まずは無料でご相談ください。</li>
          <li>課題、目的、現在の状況を整理します。</li>
          <li>対応可能な範囲と進め方をご提案します。</li>
          <li>実装・開発が必要な場合は、内容と費用を確認したうえで進めます。</li>
        </Box>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          技術スタック
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
          主に以下の技術を利用しています。案件内容に応じて、対応可能性を確認したうえで進めます。
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {['Python', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'MUI', 'Tailwind CSS', 'Ruby on Rails', 'FastAPI', 'Laravel', 'MySQL', 'Redis', 'REST API', 'PyTorch', 'scikit-learn', 'OpenCV', 'Google Apps Script', 'Google Sheets', 'Slack', 'AWS', 'GCP', 'Docker', 'GitHub'].map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Stack>
      </Box>

      <Box id="contact-form" component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          お問い合わせ
        </Typography>
        <Typography sx={{ lineHeight: 1.9, mb: 2 }}>
          メールアドレスをサイト上に直接公開せず、専用フォームからお問い合わせを受け付けています。
          お名前、個人・法人の区分、お問い合わせ内容、ご希望の連絡手段をご入力ください。
        </Typography>
        <Box sx={{ p: 2.5, borderRadius: 2, bgcolor: 'rgba(23, 63, 53, 0.05)', border: '1px solid', borderColor: 'divider', mb: 2 }}>
          <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 1 }}>
            個人情報の取り扱いについて
          </Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            ご入力いただいた個人情報は、お問い合わせへの回答および必要な連絡のためにのみ使用します。
            目的達成後は必要以上に長期間保管せず、適切に取り扱います。
            法令に基づく場合を除き、第三者への提供は行いません。
          </Typography>
        </Box>
        <Button
          variant="contained"
          href="https://form.jotform.com/262670502611045"
          target="_blank"
          rel="noreferrer"
          endIcon={<ArrowOutwardIcon />}
        >
          お問い合わせフォームを開く
        </Button>
      </Box>

      <Box component="section" sx={{ py: 4, px: 2.5, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.03)' }}>
        <Typography component="h2" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 1 }}>
          ご相談について
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          内容によっては対応できない場合もあります。まずは課題やご希望を確認し、対応可能な範囲をお伝えします。
        </Typography>
      </Box>

      <Box sx={{ py: 4 }}>
        <Button
          variant="outlined"
          href="https://github.com/Doragon-RH"
          target="_blank"
          rel="noreferrer"
          endIcon={<ArrowOutwardIcon />}
        >
          GitHubで制作物を見る
        </Button>
      </Box>
    </Layout>
  );
}
