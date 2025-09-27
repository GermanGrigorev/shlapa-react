import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/main-layout.tsx", [
    index("routes/word-list.tsx"),
    route("/play", "routes/play.tsx"),
  ]),
] satisfies RouteConfig;
