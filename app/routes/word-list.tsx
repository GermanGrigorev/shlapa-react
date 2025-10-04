import { Dictionary } from "~/widgets/dictionary";
import type { Route } from "./+types/word-list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WordList" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function WordListPage() {
  return <Dictionary />;
}
