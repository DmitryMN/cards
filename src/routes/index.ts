import React from "react";

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

