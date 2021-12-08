import React from "react";
import { useGlitch } from "https://deno.land/x/text_glitch@v0.1.1/mod.ts";
import { useRouter } from "https://deno.land/x/aleph/framework/react/mod.ts";

const defaultText = "Hello, World!";
const defaultSize = 100;

export default function Home() {
  const { query } = useRouter();

  const [text, setText] = React.useState(query.get("text") ?? defaultText);
  const [fontSize, setFontSize] = React.useState(
    Number(query.get("fontSize") ?? defaultSize)
  );
  const [glitchedText, setGlitchedText] = useGlitch(text);

  return (
    <main>
      <div>
        <div className="flex flex-wrap">
          <div className="relative w-full">
            <input
              onChange={(e) => {
                setText(e.target.value);
                setGlitchedText(e.target.value);
              }}
              className="py-2 mt-4 leading-relaxed appearance-none bg-white w-1/3"
              type="text"
              placeholder="text"
              value={text}
            />
            <input
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="py-2 mt-4 mx-4  w-16 leading-relaxed appearance-none bg-white"
              type="number"
              placeholder="size"
              value={fontSize}
            />
            <button
              onClick={() => {
                window.open(`/?text=${text}&fontSize=${fontSize}`);
              }}
              className="py-2 mt-4 mx-4  w-16 leading-relaxed appearance-none bg-white"
              type="submit"
              placeholder="size"
            >
              Decide
            </button>
          </div>
        </div>
      </div>
      <div className="text-white py-40" style={{ fontSize: `${fontSize}px` }}>
        {glitchedText}
      </div>
    </main>
  );
}
