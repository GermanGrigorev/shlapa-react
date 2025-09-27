import type { Route } from "./+types/play";
import { Playing } from "~/game/playing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Play" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Play() {
  return <Playing />;
}
