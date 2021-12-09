import React from "react";
import Container from "./../components/Container.tsx";
import Header from "./../components/Header.tsx";

import { useGlitch } from "https://deno.land/x/text_glitch@v0.1.1/mod.ts";
import { useRouter } from "https://deno.land/x/aleph/framework/react/mod.ts";

const defaultText = "Hello, World!";
const defaultSize = 100;

export default function Home() {
  const { query } = useRouter();

  const [text, setText] = React.useState("");
  const [fontSize, setFontSize] = React.useState(1);
  const [glitchedText, setGlitchedText] = useGlitch(text);

  React.useEffect(() => {
    setText(defaultText);
    setGlitchedText(defaultText);
    setFontSize(defaultSize);
  }, []);

  return (
    <Container>
      <Header />
      <div>
        <form className="mt-10">
          <div className="mt-8">
            <div>
              <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Glitch Text
              </label>
              <input
                onChange={(e) => {
                  setText(e.target.value);
                  setGlitchedText(e.target.value);
                }}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={text}
              />
            </div>
          </div>
          <div className="mt-8 flex">
            <div className="w-1/3">
              <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Font Size
              </label>
              <input
                onChange={(e) => setFontSize(Number(e.target.value))}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={fontSize}
              />
            </div>
            <div className="w-1/3 mx-10">
              <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                Font Color
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-1/8 mx-10">
              <button className="bg-gray-700 border border-gray-300 text-white block w-full p-4">
                Glitch!
              </button>
            </div>
          </div>
        </form>
        <div className="my-36">
          <div style={{ fontSize: `${fontSize}px` }}>{glitchedText}</div>
        </div>
      </div>
    </Container>
  );
}
