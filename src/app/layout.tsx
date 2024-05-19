import Head from "next/head";
import "./globals.css";
import Header from "./Components/Header/Header";
import Searchbar from "./Components/Searchbar/Searchbar";

export const metadata = {
  title: "Dream homes | Top notch real-state",
  description:
    "The Leading platform to choose your next living space. like never before! only the best real-state provided and evaluated by our experts at Dream homes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description}
        />
        <link
          rel="icon"
          href="/public/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="/public/site.webmanifest"
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <body>
        <Header />
        <Searchbar />
        {children}
      </body>
    </html>
  );
}
