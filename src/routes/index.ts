import React from "react";
import ForgotPass from "../components/ForgotPass";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";

export type RouteType = {
    path: string
    element: React.ComponentType
}

export enum RouteNames {
    SIGN_IN = '/sign-in',
    REGISTER = '/register',
    FORGOT_PATH = '/forgot',
    NEKO_PATH = '/neko',
}

export const publicRoutes: Array<RouteType> = [
    {path: RouteNames.SIGN_IN, element: Login},
    {path: RouteNames.REGISTER, element: Register},
    {path: RouteNames.FORGOT_PATH, element: ForgotPass},
    {path: RouteNames.NEKO_PATH, element: Profile},
];