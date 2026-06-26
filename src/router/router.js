import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"))
export const Blog = lazy(() => import("../pages/Blog"))
export const Contact = lazy(() => import("../pages/Contact"))
export const Info = lazy(() => import("../pages/Info"))
export const ApartmentsInDubai = lazy(() => import("../pages/ApartmentsInDubai"))
export const CategoryNumberOne = lazy(() => import("../pages/CategoryNumberOne"))
export const NotFound = lazy(() => import("../pages/NotFound"))