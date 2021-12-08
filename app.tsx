import "https://esm.sh/tailwindcss/dist/tailwind.min.css";

import React, { FC } from "react";
import Container from "./components/Container.tsx";
import Header from "./components/Header.tsx";
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
      <Container>
        <Header />
        <Page {...pageProps} />
      </Container>
    </>
  );
}
