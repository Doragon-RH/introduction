import Head from 'next/head';
import Layout,{siteTitle} from '../components/layout';
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { skillExperienceGroups } from '../data/skill-experience';

const sectionSx = {
  width: '100%',
  maxWidth: 760,
  px: { xs: 1, sm: 3 },
  py: 3,
};

const linkSx = { color: 'primary.main', fontWeight: 600 };

const projects = [
  {
    name: 'Sharemarium',
    label: '共同開発・Webアプリ',
    description: 'Flutter Web・Supabaseを用いた書籍レビュー・読書管理サービスを共同開発。投稿一覧の導線改善や、Web公開・CI/CDなどの継続的な機能改善にも参加しています。',
    language: 'Dart',
    href: 'https://github.com/Future-Atlas/sharemarium',
  },
  {
    name: 'Doragon-RH Portfolio',
    label: 'ポートフォリオ',
    description: 'このポートフォリオサイト。Next.js・TypeScript・MUIを使用し、活動紹介や開発相談の導線を実装しています。',
    language: 'TypeScript',
    href: 'https://github.com/Doragon-RH/introduction',
  },
  {
    name: 'national_data_assistant',
    label: 'AI・データ活用',
    description: 'Pythonを中心に、フロントエンドとバックエンドを組み合わせたデータ活用アプリを開発。Docker Composeでの起動に対応しています。',
    language: 'Python',
    href: 'https://github.com/Doragon-RH/national_data_assistant',
  },
  {
    name: 'NePP Library Manager',
    label: 'チーム開発',
    description: '図書管理システムのバックエンド開発に参加。Ruby on Rails・PostgreSQLを使用したWeb APIの実装経験です。',
    language: 'Ruby',
    href: 'https://github.com/nepp-tumsat/NePP_LibraryManager_Backend',
  },
  {
    name: 'contact-form',
    label: 'Web開発・学習',
    description: 'PHP・Laravelの学習・開発用リポジトリ。フォーム処理やWebアプリケーションの基礎に取り組みました。',
    language: 'PHP',
    href: 'https://github.com/Doragon-RH/contact-form',
  },
  {
    name: 'supporta-z_vol.6_API',
    label: 'ハッカソン',
    description: 'ハッカソンでTODOアプリのバックエンドを共同開発。FastAPI・MySQL・Dockerを用い、DB構築やタスクのCRUD APIを担当しました。',
    language: 'Python',
    href: 'https://github.com/Doragon-RH/supporta-z_vol.6_API',
  },
];

export default function Home() {
  return (
    <>
      <Layout home={1}>
      <Head>
        <title>Doragon-RH | {siteTitle}</title>
        <meta name="description" content="Doragon-RHのプロフィール、学習内容、活動、好きなことをまとめたページ" />
      </Head>

      <Box id="profile" component="section" sx={{ ...sectionSx, pt: { xs: 2, sm: 5 }, pb: 4 }}>
        <Chip label="つくること、学ぶこと" color="primary" variant="outlined" sx={{ mb: 2 }} />
        <Box component="h2" sx={{ fontSize: { xs: '2rem', sm: '2.8rem' }, lineHeight: 1.15, mt: 0, mb: 2 }}>Hello, I'm Doragon-RH.</Box>
        <Box component="p" sx={{ fontSize: '1.15rem', lineHeight: 1.9, maxWidth: 620, mt: 0 }}>
          大学院で学びながら、ソフトウェア開発とAI・機械学習を中心に活動しています。Python・TypeScriptを使った開発に加え、FP3級を取得し、将来のFP相談に向けてFP2級の学習も進めています。技術とデータを使って現実の課題を整理・解決することに関心があります。
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3, flexWrap: 'wrap', gap: 1.5 }}>
          <Button variant="contained" href="/development" endIcon={<ArrowOutwardIcon />}>開発案件の相談はこちら</Button>
          <Button variant="outlined" startIcon={<GitHubIcon />} href="https://github.com/Doragon-RH" target="_blank" rel="noreferrer">GitHubを見る</Button>
          <Button variant="outlined" startIcon={<ArrowOutwardIcon />} href="#projects">活動を見る</Button>
          <Button variant="outlined" href="/financial-planning">FP相談について</Button>
        </Stack>
      </Box>

      <Box id="about" component="section" sx={sectionSx}>
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>About</Box>
        <Box component="p" sx={{ lineHeight: 1.9 }}>
          情報系・機械学習への関心を軸に、大学・大学院での学習と個人開発を続けています。Webアプリケーションの制作、ハッカソン、チーム開発を通じて、アイデアを動くソフトウェアに変える経験を積んできました。
        </Box>
        <Box component="p" sx={{ lineHeight: 1.9 }}>
          大学院では機械学習を用いた研究に取り組んでいます。未発表の研究内容を守るため、研究テーマはResearch欄で公開可能な概要のみ紹介しています。
        </Box>
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 0 }}>
          興味: 運動、知識の蓄積、ゲーム、最適化、プログラミング、アニメ、漫画<br />
          日々の過ごし方: 学習と開発の時間をつくり、休日はランニングや英語・数学・中国語の学習にも取り組んでいます。
        </Box>
      </Box>

      <Box id="skills" component="section" sx={sectionSx}>
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>Skills</Box>
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          使用経験に応じて、実務経験・個人／チーム開発・学習経験の3つに分類しています。
          技術ごとの経験レベルを区別して掲載しています。
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mt: 3 }}>
          {skillExperienceGroups.map((group) => (
            <Box key={group.title} sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.paper' }}>
              <Box component="h3" sx={{ fontSize: '1.1rem', fontWeight: 700, mt: 0, mb: 0.5 }}>{group.title}</Box>
              <Box component="p" sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, mt: 0, mb: 2 }}>{group.description}</Box>
              <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                {group.skills.map((skill) => <Chip key={skill} label={skill} size="small" variant="outlined" />)}
              </Stack>
            </Box>
          ))}
        </Box>
        <Link href="https://atcoder.jp/users/ryuuhon" target="_blank" rel="noreferrer" sx={{ ...linkSx, display: 'inline-block', mt: 3 }}>AtCoder profile <ArrowOutwardIcon sx={{ fontSize: 15, verticalAlign: 'middle' }} /></Link>
      </Box>

      <Box id="work" component="section" sx={sectionSx}>
        <Chip label="開発案件 受付中" color="primary" sx={{ mb: 1.5 }} />
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>Development Work</Box>
        <Box component="p" sx={{ lineHeight: 1.9 }}>
          Web開発、AI・機械学習、データ活用、業務効率化などの開発案件を受け付けています。
          初回相談は無料で、課題と対応可能性を整理します。具体的な解決策の設計・提案や開発は、内容を確認したうえで有料で対応します。
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 1.5 }}>
          <Button variant="contained" href="/development" endIcon={<ArrowOutwardIcon />}>
            開発案件の相談はこちら
          </Button>
          <Button variant="outlined" href="/work#technical-experience">
            技術経験を見る
          </Button>
        </Stack>
      </Box>

      <Box id="projects" component="section" sx={sectionSx}>
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>What I've built</Box>
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>公開されているGitHubリポジトリを確認し、現在の制作物とこれまでの開発・共同開発経験から代表的なものを紹介します。</Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mt: 3 }}>
          {projects.map((project) => (
            <Box key={project.name} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 2.5, bgcolor: 'background.paper', transition: 'transform 180ms ease, box-shadow 180ms ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: 3 } }}>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                <Box component="h3" sx={{ fontSize: '1.05rem', mt: 0, mb: 1 }}>{project.name}</Box>
                <Chip label={project.language} size="small" />
              </Stack>
              <Chip label={project.label} size="small" color="primary" variant="outlined" sx={{ mb: 1.5 }} />
              <Box component="p" sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, minHeight: 52, mt: 0 }}>{project.description}</Box>
              <Link href={project.href} target="_blank" rel="noreferrer" sx={linkSx}>GitHubで見る <ArrowOutwardIcon sx={{ fontSize: 15, verticalAlign: 'middle' }} /></Link>
            </Box>
          ))}
        </Box>
      </Box>

      <Box id="activity" component="section" sx={sectionSx}>
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>Experience</Box>
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          大学・大学院での学習、学外講座、長期インターンや開発活動をまとめています。
          インターン先の企業名や非公開情報は掲載していません。
        </Box>
        <Box component="h3" sx={{ fontSize: '1.15rem', mt: 3, mb: 1 }}>長期インターン・実務経験</Box>
        <Box component="ul" sx={{ lineHeight: 2 }}>
          <li>2024/08 - 2026/08: Web系企業で有償長期インターン（フルスタックエンジニア）。Webアプリの機能開発・改修を担当</li>
          <li>2024/12 - 2025/12: IT・教育系企業で長期インターン。プログラミングスクールのQA対応や社内業務の効率化・自動化に従事</li>
          <li>2026/08 - 現在: AI・データ分析系企業でデータサイエンティストとしてインターン</li>
        </Box>
        <Box component="h3" sx={{ fontSize: '1.15rem', mt: 3, mb: 1 }}>大学・外部講座での機械学習</Box>
        <Box component="ul" sx={{ lineHeight: 2 }}>
          <li>大学・大学院: 情報分野やデータ分析・機械学習を学び、大学院では周辺環境予測に関する研究に取り組んでいます（概要はResearch欄に掲載）</li>
          <li>Skillup AI: 2024/06頃〜2025/01頃に、E資格に関連する機械学習・深層学習分野の講座を約4講座受講し、すべて修了しました</li>
          <li>東京大学 松尾研究室関連の講座: 機械学習・深層学習分野の学外講座を受講しています</li>
        </Box>
        <Box component="h3" sx={{ fontSize: '1.15rem', mt: 3, mb: 1 }}>その他の技術活動</Box>
        <Box component="ul" sx={{ lineHeight: 2 }}>
          <li>paiza等を通じてプログラミング・アルゴリズムを学習（スキルチェックBランク取得）</li>
          <li>2023年: サポーターズ主催ハッカソンに参加し、FastAPI・MySQL・Dockerを使用した開発を経験</li>
          <li>基本情報技術者試験に合格。Go言語の学習やAtCoderへの参加なども経験</li>
        </Box>
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.5 }}>
          <Chip icon={<GroupsIcon />} label="ハッカソン参加" />
          <Chip icon={<CodeIcon />} label="個人開発・学習" />
          <Chip icon={<TrendingUpIcon />} label="継続的な活動" />
        </Stack>
        <Button variant="outlined" href="/work#technical-experience" endIcon={<ArrowOutwardIcon />} sx={{ mt: 2.5 }}>
          技術経験を見る
        </Button>
      </Box>

      <Box id="research" component="section" sx={sectionSx}>
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>Research</Box>
        <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 2.5, bgcolor: 'background.paper' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1.5, mb: 2 }}>
            <Box component="h3" sx={{ fontSize: '1.1rem', fontWeight: 700, m: 0 }}>
              海馬型ニューラルネットワークを用いた周辺環境予測
            </Box>
            <Chip label="研究進行中" size="small" variant="outlined" />
          </Stack>
          <Box component="p" sx={{ lineHeight: 1.9, mt: 0, mb: 1.5 }}>
            大学院で、海馬型ニューラルネットワークを用いて周辺環境を予測する研究に取り組んでいます。
          </Box>
          <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 0 }}>
            研究は現在進行中のため、具体的なモデル構成、手法、実験条件、評価結果などは公開していません。
          </Box>
        </Box>
      </Box>

      <Box id="financial-planning" component="section" sx={sectionSx}>
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>Financial Planning</Box>
        <Box component="p" sx={{ lineHeight: 1.9 }}>
          FP3級を取得し、現在はFP2級取得に向けて学習しています。FP2級取得後は、家計・ライフプラン・資産形成を中心としたオンライン相談を小規模に始める予定です。
        </Box>
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          現在はサービス準備中です。相談予定の内容、想定する形式、扱う範囲については専用ページにまとめています。
        </Box>
        <Button variant="outlined" href="/financial-planning" endIcon={<ArrowOutwardIcon />}>
          FP相談ページを見る
        </Button>
      </Box>

      <Box id="contact" component="section" sx={{ ...sectionSx, pb: 5 }}>
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>Contact</Box>
        <Box component="p" sx={{ lineHeight: 1.8 }}>お仕事や技術相談については、専用フォームからお問い合わせください。メールアドレスはサイト上には直接掲載していません。</Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button variant="contained" href="/development#contact">開発案件の相談はこちら</Button>
          <Button variant="outlined" startIcon={<GitHubIcon />} href="https://github.com/Doragon-RH" target="_blank" rel="noreferrer">GitHubプロフィール</Button>
        </Stack>
      </Box>

      </Layout>
    </>
  );
}
