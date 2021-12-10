import React from "react";
import Container from "./../components/Container.tsx";
import Header from "./../components/Header.tsx";
import { HexColorPicker } from "https://esm.sh/react-colorful";

import { useGlitch } from "https://deno.land/x/text_glitch@v0.1.1/mod.ts";

const defaultText = "Hello, World!";
const defaultSize = 100;
const defaultColor = "#000000";

export default function Home() {
  const [color, setColor] = React.useState("#000000");
  const [text, setText] = React.useState("");
  const [isRight, setIsRight] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(1);
  const [glitchedText, setGlitchedText] = useGlitch(text);

  const isRightText = isRight ? "text-right" : "text-left";

  React.useEffect(() => {
    setText(defaultText);
    setGlitchedText(defaultText);
    setFontSize(defaultSize);
    setColor(defaultColor);
  }, []);

  const onClick = () => {
    const url = `/obs?text=${text}&fontSize=${fontSize}&color=${color.substr(
      1
    )}&isRight=${isRightText}`;
    window.open(url);
  };

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
            <div className="w-1/2 flex">
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                  Font Color
                </label>
                <HexColorPicker
                  color={color}
                  onChange={setColor}
                  style={{ height: "150px" }}
                />
              </div>
              <div className="ml-4">
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                  Is Right
                </label>
                <input
                  type="checkbox"
                  className="h-10 w-10 text-white"
                  checked={isRight}
                  onChange={(e) => {
                    setIsRight(e.target.checked);
                  }}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
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
              <div className="mt-8">
                <button
                  className="bg-gray-700 border border-gray-300 text-white block w-full p-4"
                  onClick={onClick}
                >
                  Glitch!
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className={`my-36  ${isRightText}`}>
          <div style={{ fontSize: `${fontSize}px`, color: color }}>
            {glitchedText}
          </div>
        </div>
      </div>
    </Container>
  );
}
