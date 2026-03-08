"use client";

import Image from "next/image";

function KeyboardButton({ children }: { children: React.ReactNode }) {
  function onButtonClick() {
    console.log(`Button ${children} clicked!`);

    const keyboardTitle = document.getElementById("keyboard-title");
    if (keyboardTitle) {
      if(children === "SPACE") {
        keyboardTitle.textContent += " ";
      } else if(children === "DELETE") {
        keyboardTitle.textContent = keyboardTitle.textContent?.slice(0, -1) || "";
      } else {
      keyboardTitle.textContent += `${children}`;
      }
    }
  }
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onButtonClick}>
      {children}
    </button>
  );
}
function KeyBoard() {
  return (
    // container stretches full width and centers contents
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap justify-center w-full space-x-2 mb-4">
        <KeyboardButton>Q</KeyboardButton>
        <KeyboardButton>W</KeyboardButton>
        <KeyboardButton>E</KeyboardButton>
        <KeyboardButton>R</KeyboardButton>
        <KeyboardButton>T</KeyboardButton>
        <KeyboardButton>Y</KeyboardButton>
        <KeyboardButton>U</KeyboardButton>
        <KeyboardButton>I</KeyboardButton>
        <KeyboardButton>O</KeyboardButton>
        <KeyboardButton>P</KeyboardButton>
      </div>
      <div className="flex flex-wrap justify-center w-full space-x-2 mb-4">
        <KeyboardButton>A</KeyboardButton>
        <KeyboardButton>S</KeyboardButton>
        <KeyboardButton>D</KeyboardButton>
        <KeyboardButton>F</KeyboardButton>
        <KeyboardButton>G</KeyboardButton>
        <KeyboardButton>H</KeyboardButton>
        <KeyboardButton>J</KeyboardButton>
        <KeyboardButton>K</KeyboardButton>
        <KeyboardButton>L</KeyboardButton>
      </div>
      <div className="flex flex-wrap justify-center w-full space-x-2">
        <KeyboardButton>Z</KeyboardButton>
        <KeyboardButton>X</KeyboardButton>
        <KeyboardButton>C</KeyboardButton>
        <KeyboardButton>V</KeyboardButton>
        <KeyboardButton>B</KeyboardButton>
        <KeyboardButton>N</KeyboardButton>
        <KeyboardButton>M</KeyboardButton>
      </div>
      <div className="flex flex-wrap justify-center w-full space-x-2 mt-4">
        <KeyboardButton>SPACE</KeyboardButton>
        <KeyboardButton>DELETE</KeyboardButton>
      </div>
    </div>
  ); 
}

export default function Home() {
  return (  
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p id="keyboard-title" className="text-2xl font-bold">Keyboard</p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <KeyBoard />
      </div>
    </div>
  );
}

