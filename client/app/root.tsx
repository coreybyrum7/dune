import {
  type MetaFunction,
  type LoaderFunction, 
  type LinksFunction,
  json
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import styles from "./styles/app.css"
import SiteHeader from "~/components/Header";
import { getUserData } from "~/utils/session.server";


type LoaderData = {
  userData: Awaited<ReturnType<typeof getUserData>>;
};

export const meta: MetaFunction = () => ([{
  charset: "utf-8",
  title: "Profiles | Find & connect with people",
  viewport: "width=device-width,initial-scale=1",
}]);

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    userData: await getUserData(request),
  });
};

export default function App() {
  const { userData } = useLoaderData() as LoaderData;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="site-main">
          <SiteHeader user={userData?.user} />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
