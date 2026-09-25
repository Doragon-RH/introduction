import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

const consultationTopics = [
  {
    title: '家計の整理',
    description: '収入・支出・貯蓄状況を整理し、今後の家計改善を考えるための土台をつくります。',
    icon: <AccountBalanceWalletOutlinedIcon />,
  },
  {
    title: 'ライフプラン',
    description: '結婚、住宅、教育、老後などのライフイベントと必要資金を一緒に整理します。',
    icon: <EventNoteOutlinedIcon />,
  },
  {
    title: '資産形成',
    description: '長期・積立・分散、リスクとリターンなど、資産形成の基本的な考え方を整理します。',
    icon: <ShowChartOutlinedIcon />,
  },
  {
    title: 'NISA / iDeCo',
    description: '制度の基本的な仕組みや特徴を、初めての方にも分かりやすく説明します。',
    icon: <SavingsOutlinedIcon />,
  },
];

const serviceFacts = [
  ['資格状況', 'FP3級取得済み / FP2級取得に向けて学習中'],
  ['サービス状況', '準備中（FP2級取得後に開始予定）'],
  ['想定形式', 'オンライン / 1回 約60分'],
  ['料金', '開始時に正式決定 / 初期モニターは応相談'],
];

export default function FinancialPlanning() {
  return (
    <Layout home={0}>
      <Head>
        <title>Financial Planning | {siteTitle}</title>
        <meta
          name="description"
          content="FP3級取得済み・FP2級取得に向けて学習中。将来のFP相談サービスについて紹介します。"
        />
      </Head>

      <Box component="section" sx={{ py: { xs: 2, sm: 4 } }}>
        <Chip label="Financial Planning" color="primary" variant="outlined" sx={{ mb: 2 }} />
        <Typography component="h1" sx={{ fontSize: { xs: '2rem', sm: '2.6rem' }, fontWeight: 700, lineHeight: 1.2, mb: 2 }}>
          お金について、一緒に整理する。
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.9, maxWidth: 720 }}>
          家計・ライフプラン・資産形成について、制度や数字を整理しながら一緒に考えるFP相談を準備しています。
          現在はFP3級を取得済みで、FP2級取得に向けて学習中です。
        </Typography>

        <Box sx={{ mt: 3, p: 2.5, borderRadius: 2, bgcolor: 'rgba(23, 63, 53, 0.06)', border: '1px solid', borderColor: 'divider' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ alignItems: { xs: 'flex-start', sm: 'center' } }}>
            <Chip label="FP相談サービス準備中" color="primary" />
            <Typography sx={{ color: 'text.secondary' }}>
              FP2級取得後に相談受付を開始する予定です。
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          相談予定の内容
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
          20〜30代の会社員など、これから家計管理や資産形成を本格的に考えたい方を主な対象として想定しています。
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
          {consultationTopics.map((topic) => (
            <Box key={topic.title} sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.paper' }}>
              <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', mb: 1 }}>
                {topic.icon}
                <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  {topic.title}
                </Typography>
              </Stack>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                {topic.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 2 }}>
          現在のステータス
        </Typography>
        <Box sx={{ display: 'grid', gap: 1.2 }}>
          {serviceFacts.map(([label, value]) => (
            <Box key={label} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '170px 1fr' }, gap: 1, p: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ fontWeight: 700 }}>{label}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box component="section" sx={{ py: 1, pb: 4 }}>
        <Box sx={{ p: 2.5, borderRadius: 2, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(23, 63, 53, 0.04)' }}>
          <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 1 }}>
            初期モニター相談について
          </Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            サービス開始後の最初の5名程度は、相談後のアンケートにご協力いただける方を対象に、大幅な割引を予定しています。
            初期モニターの具体的な料金は応相談とします。
          </Typography>
        </Box>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          将来的に提供したいもの
        </Typography>
        <Typography sx={{ lineHeight: 1.9, mb: 2 }}>
          FP相談に加えて、Web開発・データ分析の経験を活かし、家計や資産形成を可視化できるシミュレーション機能も検討しています。
        </Typography>
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
          <Chip label="家計シミュレーター" />
          <Chip label="資産形成シミュレーター" />
          <Chip label="ライフプランシミュレーター" />
          <Chip label="相談後の簡易レポート" />
        </Stack>
      </Box>

      <Divider />

      <Box component="section" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ fontSize: '1.6rem', fontWeight: 700, mb: 1.5 }}>
          相談で扱う範囲
        </Typography>
        <Typography sx={{ lineHeight: 1.9, mb: 1.5 }}>
          家計整理、ライフプラン、NISA・iDeCoなどの制度説明、一般的な資産形成や資産配分の考え方、将来シミュレーションなどを中心に扱う予定です。
        </Typography>
        <Typography sx={{ lineHeight: 1.9, color: 'text.secondary' }}>
          一方で、個別具体的な税務判断や税理士業務、特定の金融商品の売買推奨などは、この相談サービスの対象として想定していません。
          必要に応じて適切な専門家への相談をご案内する方針です。
        </Typography>
      </Box>

      <Box component="section" sx={{ py: 4, px: 2.5, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.03)' }}>
        <Typography component="h2" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 1 }}>
          Disclaimer
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.95rem' }}>
          このページは、現在準備中のFP相談サービスの構想を紹介するものです。掲載内容は一般的な情報提供を目的としており、
          個別の税務・法律・投資判断を提供するものではありません。
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
          GitHubを見る
        </Button>
      </Box>
    </Layout>
  );
}
