/// <reference types="react-scripts" />
import { ReactChildren } from "react";

interface ILocation {
    pathname: string;
    search: string;
    hash: string;
    href: string;
    origin: string;
}

interface IRouterProps {
    children?: ReactChildren;
    location: ILocation;
    navigate: (to: string, options: Object) => void;
    path: string;
}
