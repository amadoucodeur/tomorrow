"use client";
import React, { useRef } from "react";

export default function page() {
  const languages = [
    "Anglais",
    "Arabe",
    "Chinois (simplifié)",
    "Chinois (traditionnel)",
    "Coréen",
    "Danois",
    "Espagnol",
    "Finnois",
    "Français",
    "Allemand",
    "Grec",
    "Hébreu",
    "Hindi",
    "Hongrois",
    "Indonésien",
    "Italien",
    "Japonais",
    "Néerlandais",
    "Norvégien",
    "Polonais",
    "Portugais",
    "Russe",
    "Suédois",
    "Thaï",
    "Turc",
  ];
  const textEnter = useRef(null);
  const textResult = useRef(null);
  const languageChoosed = useRef(null);
  const effacer = () => {
    textEnter.current.value = "";
    textResult.current.value = "";
  };
  const copy = () => {
    textResult.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };
  const traducteur = async () => {
    if (textEnter.current.value) {
      const result = await fetch("/api/traducteur", {
        method: "POST",
        body: JSON.stringify({
          lang: languageChoosed.current.value,
          text: textEnter.current.value,
        }),
      });
      const res = await result.text();
      console.log(res);
      textResult.current.value = res;

    }
  };
  return (
    <main className="w-full flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-2 self-start">
        Tomorrow Traducteur
      </h1>
      <div className="w-full flex flex-col items-center">
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
          <select
            ref={languageChoosed}
            className="transition duration-300 hover:bg-slate-700 mx-1 outline-none bg-slate-600 text-white rounded  p-1"
            name=""
            id=""
          >
            {languages.map((el, ind) => (
              <option key={ind} value={el}>
                {el}
              </option>
            ))}
          </select>
          <button
            onClick={copy}
            className="transition duration-300 hover:bg-slate-700 mx-1 bg-slate-600 text-white rounded  p-1"
          >
            Copy
          </button>
          <button
            onClick={traducteur}
            className="transition duration-300 hover:bg-slate-700 mx-1 bg-slate-600 text-white rounded  p-1"
          >
            Traduire
          </button>
        </div>
        <textarea
          className="w-full rounded m-2 bg-slate-800 resize-none p-4 outline-none"
          placeholder="La traduction..."
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
