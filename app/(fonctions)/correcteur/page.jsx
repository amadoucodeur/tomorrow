"use client";
import React, { useRef } from "react";

export default function page() {
  const textEnter = useRef(null);
  const textResult = useRef(null);
  const effacer = () => {
    textEnter.current.value = "";
    textResult.current.value = "";
  };
  const copy = () => {
    textResult.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };
  const corrige = async () => {
    if (textEnter.current.value) {
      const result = await fetch("/api/correcteur", {
        method: "POST",
        body: JSON.stringify({
          text: textEnter.current.value,
        }),
      });
      const res = await result.text();
      console.log(res);
      textResult.current.value = res;
    }
  };
  return (
    <main className="w-full flex flex-col items-center p-6 overflow-y-auto h-screen">
      <h1 className="text-4xl font-bold mb-2 self-start">
        Tomorrow Correcteur
      </h1>
      <div className="w-full flex flex-col items-center ">
        <textarea
          className="w-full rounded m-2 bg-slate-800 resize-none p-4 outline-none "
          placeholder="Entrez le texte ici..."
          autoFocus
          name=""
          id=""
          cols="30"
          rows="10"
          ref={textEnter}
        ></textarea>
        <div className="flex self-end">
          <button
            onClick={effacer}
            className="transition duration-300 hover:bg-slate-700 mx-1 bg-slate-600 text-white rounded  p-1"
          >
            Effacer
          </button>
          <button
            onClick={corrige}
            className="transition duration-300 hover:bg-slate-700 mx-1 bg-slate-600 text-white rounded  p-1"
          >
            Corriger
          </button>
          <button
            onClick={copy}
            className="transition duration-300 hover:bg-slate-700 mx-1 bg-slate-600 text-white rounded  p-1"
          >
            Copy
          </button>
        </div>
        <textarea
          className="w-full rounded m-2 bg-slate-800 resize-none p-4 outline-none"
          placeholder="La correction..."
          readOnly
          name=""
          id=""
          cols="30"
          rows="10"
          ref={textResult}
        ></textarea>
      </div>
    </main>
  );
}
