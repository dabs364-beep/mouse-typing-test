"use client";

import React, { ChangeEvent } from "react";
import Image from "next/image";

let shift = false;
function KeyboardButton({ children }: { children: React.ReactNode }) {
  function onButtonClick() {
    console.log(`Button ${children} clicked!`);

    const keyboardText = document.getElementById("keyboard-text");
    if (keyboardText) {
      if(children === "SPACE") {
        // append non-breaking space so it's not collapsed by whitespace rules
        keyboardText.textContent += "\u00A0";
      } else if(children === "DELETE") {
        keyboardText.textContent = keyboardText.textContent?.slice(0, -1) || "";
      } else if(children === "CAPS-LOCK") {
          if(shift) {
            shift = false;
          } else {
            shift = true;
          }
      } else if(children) {
        keyboardText.textContent += `${shift ? children.toString().toUpperCase() : children.toString().toLowerCase()}`;
      }
    }
  }
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onButtonClick}>
      {children}
    </button>
  );
}
function KeyboardRow({ children }: { children: React.ReactNode }) {
  function onRowClick() {
    console.log("Row clicked!");

    const box = document.querySelector(".flex.flex-col.items-center.w-full");
    if(!box) return;
    const buttons = box.querySelectorAll("button");
    buttons.forEach(btn => {
      // btn.style.backgroundColor = btn.style.backgroundColor === "red" ? "blue" : "red";
      if(btn.textContent !== "SPACE" && btn.textContent !== "DELETE" && btn.textContent !== "CAPS-LOCK") {
        btn.textContent = shift ? btn.textContent?.toUpperCase() || "" : btn.textContent?.toLowerCase() || "";
      }
      /*
      if(btn.textContent === "CAPS-LOCK") {
        btn.style.backgroundColor = shift ? "green" : "blue";
      }
        */
    });

  
  }
  return (
    <div className="flex flex-wrap justify-center w-full space-x-2 mb-4" onClick={onRowClick}>
      {children}
    </div>
  );
}
function KeyBoard() {
  return (
    // container stretches full width and centers contents
    // origin-bottom ensures scaling grows upward instead of downward
    <div className="flex flex-col items-center w-full">
      <KeyboardRow>
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
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton>A</KeyboardButton>
        <KeyboardButton>S</KeyboardButton>
        <KeyboardButton>D</KeyboardButton>
        <KeyboardButton>F</KeyboardButton>
        <KeyboardButton>G</KeyboardButton>
        <KeyboardButton>H</KeyboardButton>
        <KeyboardButton>J</KeyboardButton>
        <KeyboardButton>K</KeyboardButton>
        <KeyboardButton>L</KeyboardButton>
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton>Z</KeyboardButton>
        <KeyboardButton>X</KeyboardButton>
        <KeyboardButton>C</KeyboardButton>
        <KeyboardButton>V</KeyboardButton>
        <KeyboardButton>B</KeyboardButton>
        <KeyboardButton>N</KeyboardButton>
        <KeyboardButton>M</KeyboardButton>
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton>SPACE</KeyboardButton>
        <KeyboardButton>DELETE</KeyboardButton>
        <KeyboardButton>CAPS-LOCK</KeyboardButton>
      </KeyboardRow>
    </div>
  );
}

function Cursor() {
  return (
    <span id="cursor" className="ml-0">|</span>
  );
}
export default function Home() {
  function changeKeyboardSize(event: ChangeEvent<HTMLInputElement>): void {
    const keyboard = document.querySelector(".flex.flex-col.items-center.w-full");
    if (keyboard) {
      const size = Number(event.target.value);
      keyboard.setAttribute("style", `transform: scale(${size / 100});`);
    }
  }

  return (  
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="text-2xl font-bold max-w-5xl break-words whitespace-normal">
          <span id="keyboard-title" className="inline break-words break-all whitespace-normal">
            <span id="keyboard-text" className="inline">Keyboard</span>
            <Cursor />
          </span>
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm pb-16">
        <KeyBoard />
      </div>
      <div id="bottom-bar" className="fixed bottom-0 right-0 m-4 p-2 bg-transparent rounded">
        <input
          type="range"
          min="40"
          max="180"
          className="w-32 h-1 bg-transparent accent-blue-500 "
          onChange={changeKeyboardSize}
        />
      </div>
    </div>
  );
}

