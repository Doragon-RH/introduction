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

const inquiryFormUrl = 'https://form.jotform.com/262670502611045';

const developmentAreas = [
  {
    title: 'Webアプリケーション開発',
    description:
      'Next.js / React / TypeScriptやRuby on Railsなどを用いたWebアプリケーションの新規開発、機能追加、改修についてご相談いただけます。',
    icon: <CodeOutlinedIcon />,
  },
  {
    title: 'AI・機械学習の活用',
    description:
      'AI・機械学習を使った機能の検討、プロトタイプ開発、画像処理など、課題に対して技術をどう適用するかという段階から対応します。',
    icon: <PsychologyOutlinedIcon />,
  },
  {
    title: '業務効率化・自動化',
    description:
      'Python、Google Apps Script、スプレッドシート、Slack連携などを使い、繰り返し発生する手作業やデータ処理の自動化を検討します。',
    icon: <AnalyticsOutlinedIcon />,
  },
  {
    title: '実行環境・クラウド',
    description:
      'Docker、AWS、GCPなどの利用経験をもとに、開発内容に必要な実行環境やクラウド構成について対応可能な範囲で検討します。',
    icon: <CloudOutlinedIcon />,
  },
];

const steps = [
  {
    title: '1. 初回相談',
    price: '無料',
    description:
      '現在の課題、実現したいこと、既存環境などを伺い、課題の整理と対応可能性の確認を行います。この段階では費用はいただきません。',
  },
  {
    title: '2. 解決策の設計・提案',
    price: '有料',
    description:
      '具体的な調査、技術選定、構成検討、実装方針の設計など、実際の解決策を作り込む工程です。必要な内容と費用を事前に確認したうえで進めます。',
  },
  {
    title: '3. 開発・実装',
    price: '有料',
    description:
      '合意した内容に基づき、実装、テスト、改善などを行います。案件の内容によっては、設計・提案のみで終了することも可能です。',
  },
];

export default function DevelopmentConsultation() {
  return (
    <Layout home={0}>
      <Head>
        <title>開発案件のご相談 | {siteTitle}</title>
        <meta
          name="description"
          content="Web開発、AI・機械学習、業務効率化などの開発案件を受け付けています。初回相談は無料、具体的な解決策の提案や開発は個別見積もりで対応します。"
        />
      </Head>

      <Box component="section" sx={{ py: { xs: 2, sm: 4 } }}>
        <Chip label="Development Consultation" color="primary" variant="outlined" sx={{ mb: 2 }} />
        <Typography
          component="h1"
          sx={{ fontSize: { xs: '2rem', sm: '2.7rem' }, fontWeight: 700, lineHeight: 1.2, mb: 2 }}
        >
          開発案件のご相談を受け付けています。
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.9, maxWidth: 740, mb: 3 }}>
          Webアプリケーション開発、AI・機械学習、データ活用、業務効率化など、
          技術を使って解決したい課題についてご相談いただけます。
          まだ仕様が決まっていない段階でも、まずは初回無料相談で課題を整理します。
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button
            variant="contained"
            href={inquiryFormUrl}
            target="_blank"
            rel="noreferrer"
            endIcon={<ArrowOutwardIcon />}
          >
            開発案件の相談はこちら
          </Button>
          <Button variant="outlined" href="/work#technical-experience">
            技術経験を確認する
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          p: { xs: 2.5, sm: 3 },
          borderRadius: 2,
          bgcolor: 'rgba(23, 63, 53, 0.06)',
          border: '1px solid',
          borderColor: 'divider',
          mb: 4,
        }}
      >
        <Typography component="h2" sx={{ fontSize: '1.3rem', fontWeight: 700, mb: 1 }}>
          初回相談は無料です
        </Typography>
        <Typography sx={{ lineHeight: 1.9 }}>
          初回相談では、課題・目的・現在の状況を伺い、対応できそうかを一緒に整理します。
          その後、具体的な解決策の設計・提案や開発が必要な場合は有料となります。
          有料で進める前に、対応範囲と費用をご確認いただきます。
        </Typography>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1 }}>
          ご相談いただける開発内容
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
          「何を作ればよいかまだ決まっていない」という段階でも構いません。
          課題に対して開発が適切かどうかも含めて確認します。
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
          {developmentAreas.map((area) => (
            <Box
              key={area.title}
              sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.paper' }}
            >
              <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', mb: 1 }}>
                {area.icon}
                <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  {area.title}
                </Typography>
              </Stack>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {area.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1 }}>
          ご相談から開発まで
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
          無料相談と有料対応の範囲を分け、費用が発生する前に内容を確認できる形で進めます。
        </Typography>
        <Stack spacing={2}>
          {steps.map((step) => (
            <Box
              key={step.title}
              sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.paper' }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', gap: 1, mb: 1 }}>
                <Typography component="h3" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                  {step.title}
                </Typography>
                <Chip
                  label={step.price}
                  size="small"
                  color={step.price === '無料' ? 'success' : 'default'}
                  variant={step.price === '無料' ? 'filled' : 'outlined'}
                />
              </Stack>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {step.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          料金について
        </Typography>
        <Typography sx={{ lineHeight: 1.9, mb: 2 }}>
          開発料金は一律ではなく、案件ごとに個別にお見積もりします。
          必要な工数、実装・調査の難易度、要件の範囲、利用する技術、納期、テストや保守の必要性などによって費用は変わります。
        </Typography>
        <Box
          sx={{
            p: 2.5,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'rgba(0,0,0,0.025)',
          }}
        >
          <Typography sx={{ fontWeight: 700, mb: 1 }}>費用が発生する前に確認します</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            初回相談の内容をもとに、有料対応が必要な場合は、対象範囲と見積もりの考え方をお伝えします。
            内容と費用に合意いただく前に、有料の設計・提案・開発を開始することはありません。
          </Typography>
        </Box>
      </Box>

      <Divider />

      <Box id="contact" component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          開発案件の相談
        </Typography>
        <Typography sx={{ lineHeight: 1.9, mb: 2 }}>
          まずは「こういうことはできるか」という段階からご相談ください。
          お問い合わせフォームから相談カテゴリと現在の課題をご記入いただけます。
        </Typography>
        <Button
          variant="contained"
          href={inquiryFormUrl}
          target="_blank"
          rel="noreferrer"
          endIcon={<ArrowOutwardIcon />}
        >
          初回無料相談を申し込む
        </Button>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8, mt: 2 }}>
          お問い合わせフォームに入力された個人情報は、回答および必要な連絡のためにのみ利用し、
          目的達成後は必要以上に長期間保管しません。
        </Typography>
      </Box>
    </Layout>
  );
}
