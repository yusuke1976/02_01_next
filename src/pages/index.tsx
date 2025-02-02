type Post = {
  id: number;
  name: string;
  date: string;
  content: string;
};

// MEMO: データベースから取得しているイメージです🤗（API）
const dummyData: Post[] = [
  {
    id: 1,
    name: "山田 太郎",
    date: "2024-02-01",
    content: "今日はReactの勉強をしました！",
  },
  {
    id: 2,
    name: "佐藤 花子",
    date: "2024-02-02",
    content: "新しいプロジェクトが始まりました。",
  },
  {
    id: 3,
    name: "鈴木 一郎",
    date: "2024-02-03",
    content: "Next.jsのSSRを試しています。",
  },
  {
    id: 4,
    name: "田中 桃子",
    date: "2024-02-04",
    content: "UIデザインの改善を行いました。",
  },
  {
    id: 5,
    name: "中村 健",
    date: "2024-02-05",
    content: "TypeScriptの型安全性について学習中。",
  },
];