import { GraduationCap, Languages, ScanText, SpellCheck2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-6xl font-bold mb-2">Welcom to Tomorrow</h1>
      <div className="flex flex-wrap h-20  justify-center">
        <Link href={"/correcteur"} className="transition duration-300 hover:bg-slate-700 rounded bg-slate-800 flex flex-col p-4 m-2 items-center text-xl">
          <SpellCheck2 size={30} />
          Correcteur
        </Link>
        <Link href={"/traducteur"} className="transition duration-300 hover:bg-slate-700 rounded m-2 bg-slate-800 flex flex-col p-4 items-center text-xl">
          <Languages size={30}/>
          Traducteur
        </Link>
        <Link href={"#"} className="transition duration-300 hover:bg-slate-700 rounded m-2 bg-slate-800 flex flex-col p-4 items-center text-xl">
          <GraduationCap size={30}/> 
          Curricilum Bot
        </Link>
        <Link href={"#"} className="transition duration-300 hover:bg-slate-700 rounded m-2 bg-slate-800 flex flex-col p-4 items-center text-xl">
          <ScanText size={30}/>
          Rédaction
        </Link>
      </div>
    </main>
  );
}
