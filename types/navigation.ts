import type { routes } from "@/constants/routes";

export type RouteKey = keyof typeof routes;
export type AppRoute = (typeof routes)[RouteKey];
