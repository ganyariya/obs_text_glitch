import "https://cdn.esm.sh/tailwindcss@2.2.19/dist/tailwind.min.css";

import React, { FC } from "react";
import Head from "./components/Head.tsx";

export default function App({
  Page,
  pageProps,
}: {
  Page: FC;
  pageProps: Record<string, unknown>;
}) {
  return (
    <>
      <Head />
      <Page {...pageProps} />
    </>
  );
}
