import type { MetaFunction, LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import appStyles from '~/styles/app.css';
import tailwindStyles from '~/styles/tailwind.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Matter-Regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Matter-Medium.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: tailwindStyles }
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Best Cryptocurrency Coins By Community Votes | QuantCoins',
  viewport: 'width=device-width,initial-scale=1'
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
