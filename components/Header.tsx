import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-white font-bold">
        <div className="container mx-auto flex flex-wrap px-0 py-6 flex-col md:flex-row items-center">
          <a href="/" className="flex items-center mb-4 md:mb-0">
            <span className="ml-1 text-xl">OBS-Text-Glitch</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="https://ganyariya.netlify.app/" className="mr-5">
              ganyariya
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
