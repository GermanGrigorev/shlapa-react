import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { routes } from "./shared/routes";

export default [
  layout("routes/main-layout.tsx", [
    index("routes/word-list.tsx"),
    route(routes.play, "routes/play.tsx"),
  ]),
] satisfies RouteConfig;
