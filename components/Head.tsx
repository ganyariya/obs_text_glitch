import React from "react";

export default function Head() {
  return (
    <head>
      <html lang="ja" />
      <title>ganyariya</title>
      <meta name="description" content="ganyariya's portfolio" />
      <meta name="robots" content="all" />
      {/* OGP */}
      <head prefix="og: http://ogp.me/ns#" />
      <meta property="og:url" content="https://ganyariya.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ganariya's portfolio" />
      <meta property="og:description" content="ganariya's portfolio" />
      <meta property="og:site_name" content="ganariya's portfolio" />
      <meta
        property="og:image"
        content="https://i.gyazo.com/a44f7c81df21d93f8b7c3d15ba97d52f.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ganyariya" />
      <meta name="twitter:creator" content="@ganyariya" />
      <style>{"body { background-color: #00FF00; }"}</style>
    </head>
  );
}
