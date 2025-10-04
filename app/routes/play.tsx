import type { Route } from "./+types/play";
import { GuessRandomWord } from "~/widgets/guess-random-word";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Play" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Play() {
  return <GuessRandomWord />;
}
