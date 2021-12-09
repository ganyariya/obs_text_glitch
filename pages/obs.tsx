import React from "react";
import { useRouter } from "https://deno.land/x/aleph/framework/react/mod.ts";
import { useGlitch } from "https://deno.land/x/text_glitch@v0.1.1/mod.ts";

export default function Home() {
  const { query } = useRouter();

  const [color, setColor] = React.useState("#000000");
  const [fontSize, setFontSize] = React.useState(1);
  const [glitchedText, setGlitchedText] = useGlitch("");

  React.useEffect(() => {
    const queryText = query.get("text");
    const queryFontSize = query.get("fontSize");
    const queryColor = query.get("color");
    if (queryText) setGlitchedText(queryText);
    if (queryFontSize) setFontSize(Number(queryFontSize));
    if (queryColor) setColor(`#${queryColor}`);
  }, []);

  return (
    <div>
      <div style={{ fontSize: `${fontSize}px`, color: color }}>
        {glitchedText}
      </div>
      <style>{"body { background-color: #00FF00; }"}</style>
    </div>
  );
}
