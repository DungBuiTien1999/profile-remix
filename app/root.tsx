import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
import styles from './styles/tailwind.css';
import stylesHeader from './styles/header.css';
import MainLayout from './layouts/MainLayout';
import stylesCommon from './styles/common.css';

export const meta: MetaFunction = () => {
  return { title: 'Profile' };
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }, { rel: 'stylesheet', href: stylesHeader }, { rel: 'stylesheet', href: stylesCommon }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className='overflow-x-hidden no-scrollbar'>
        <MainLayout>
          <Outlet />
        </MainLayout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
