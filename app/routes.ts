import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // /
  route("homepage", "routes/homepage.tsx"), // /homepage
] satisfies RouteConfig;
