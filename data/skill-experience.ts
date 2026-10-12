// 公開プロフィールでのスキル経験レベルは本人申告と実績に基づく。
// 個人・チーム開発は、業務とは独立した開発経験を含む。
export const skillExperienceGroups = [
  {
    title: '実務経験',
    description: '長期インターンなどの業務で使用した技術',
    skills: [
      'Python', 'TypeScript', 'JavaScript', 'PHP', 'Laravel',
      'Ruby', 'Ruby on Rails', 'React', 'Next.js', 'MUI',
      'Tailwind CSS', 'HTML', 'CSS', 'MySQL', 'Redis', 'REST API',
      'PyTorch', 'PyTorch Lightning', 'TensorBoard', 'Docker',
      'Git', 'GitHub', 'GitHub Actions', 'CI/CD',
      'Google Apps Script', 'Google Sheets', 'Slack Integration',
      'Excel Automation',
    ],
  },
  {
    title: '個人・チーム開発',
    description: '個人制作・共同開発などで使用した技術（実務経験とは区別）',
    skills: [
      'Flutter', 'Dart', 'Supabase', 'Vercel', 'PostgreSQL',
      'FastAPI', 'scikit-learn', 'OpenCV', 'Poetry', 'AWS', 'GCP',
    ],
  },
  {
    title: '学習経験',
    description: '授業や教材などを通じて学習した技術',
    skills: ['Go', 'C', 'R'],
  },
] as const;
