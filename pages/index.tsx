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

const sectionSx = {
  width: '100%',
  maxWidth: 760,
  px: { xs: 1, sm: 3 },
  py: 3,
};

const linkSx = { color: 'primary.main', fontWeight: 600 };

const skillGroups = [
  { title: 'Programming', skills: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'Ruby', 'Go'] },
  { title: 'Frontend', skills: ['React', 'Next.js', 'MUI', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'AI / Machine Learning', skills: ['Machine Learning', 'PyTorch', 'PyTorch Lightning', 'scikit-learn', 'OpenCV'] },
  { title: 'Backend / Data', skills: ['Ruby on Rails', 'FastAPI', 'Laravel', 'MySQL', 'Redis', 'REST API'] },
  { title: 'Automation', skills: ['Google Apps Script', 'Google Sheets', 'Slack Integration', 'Excel Automation'] },
  { title: 'Cloud / Infrastructure', skills: ['AWS', 'GCP', 'Docker'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Poetry'] },
];

const projects = [
  { name: 'book_case', label: '共同開発', description: '本を管理するサービスの開発に参加。現在も継続的にコミットしています。', language: 'Dart', href: 'https://github.com/Future-Atlas/book_case' },
  { name: 'NePP Library Manager', label: 'チーム開発', description: '図書館管理システムのバックエンド開発に参加。Rubyを使った実装経験です。', language: 'Ruby', href: 'https://github.com/nepp-tumsat/NePP_LibraryManager_Backend' },
  { name: 'national_data_assistant', label: 'データ活用', description: 'Pythonでデータを扱うアプリケーションに取り組んでいます。', language: 'Python', href: 'https://github.com/Doragon-RH/national_data_assistant' },
  { name: 'supporta-z_vol.6_API', label: 'ハッカソン', description: 'FastAPI、OpenCV、MySQL、Dockerを組み合わせたAPI開発。', language: 'Python', href: 'https://github.com/Doragon-RH/supporta-z_vol.6_API' },
  { name: 'nextjs-dashboard', label: 'Web開発', description: 'Next.jsとTypeScriptでダッシュボードを実装し、UI開発を学習。', language: 'TypeScript', href: 'https://github.com/Doragon-RH/nextjs-dashboard' },
  { name: 'contact-form', label: 'バックエンド', description: 'PHPとLaravelを使ったフォーム開発を通して、Webの基礎を深掘り。', language: 'PHP', href: 'https://github.com/Doragon-RH/contact-form' },
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
          大学・大学院での具体的な専攻や研究テーマは、公開できる範囲を整理したうえで追記する予定です。
        </Box>
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 0 }}>
          興味: 運動、知識の蓄積、ゲーム、最適化、プログラミング、アニメ、漫画<br />
          日々の過ごし方: 学習と開発の時間をつくり、休日はランニングや英語・数学・中国語の学習にも取り組んでいます。
        </Box>
      </Box>

      <Box id="skills" component="section" sx={sectionSx}>
        <Box component="h2" sx={{ fontSize: '1.6rem' }}>Skills</Box>
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>GitHub上の公開コードで確認できる技術と、これまでの学習内容をカテゴリ別に整理しています。</Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mt: 3 }}>
          {skillGroups.map((group) => (
            <Box key={group.title} sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 2 }}>
              <Box component="h3" sx={{ fontSize: '1rem', mt: 0, mb: 1 }}>{group.title}</Box>
              <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                {group.skills.map((skill) => <Chip key={skill} label={skill} size="small" />)}
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
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>GitHubで公開・参加しているプロジェクトから、代表的なものを紹介します。</Box>
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
        <Box component="p" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>公開情報から確認できる開発・技術活動です。</Box>
        <Box component="ul" sx={{ lineHeight: 2 }}>
          <li>2022/04 - 2023/02: paizaでアルゴリズム、HTML、CSSを学習。スキルチェックBランク取得</li>
          <li>2023/04 - 2023/08: サポーターズ主催ハッカソンに参加（FastAPI、OpenCV、MySQL、Docker）</li>
          <li>2023/07 - 2023/11: 基本情報技術者試験に合格</li>
          <li>2023/10 - 2023/12: Go言語を学習</li>
          <li>2023/12 - 現在: AtCoderコンテストに参加</li>
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
        <Box component="p" sx={{ lineHeight: 1.9 }}>大学院での研究を紹介するためのセクションです。未公開の研究内容は掲載せず、公開できる範囲が決まり次第更新します。</Box>
        <Box sx={{ border: '1px dashed', borderColor: 'divider', p: 2, color: 'text.secondary' }}>
          <Box component="p" sx={{ mt: 0 }}>研究分野: TODO</Box>
          <Box component="p">使用技術: TODO</Box>
          <Box component="p">研究テーマの概要: TODO</Box>
          <Box component="p" sx={{ mb: 0 }}>今後の方向性: TODO</Box>
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
