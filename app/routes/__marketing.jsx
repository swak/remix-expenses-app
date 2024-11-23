import { Outlet } from "@remix-run/react";
import marketingStyles from '../styles/marketing.css';

export default function MarkeitngLayout() {
    return <Outlet />
}

export function links() {
    return [{rel: 'stylesheet',  href: marketingStyles }];
}