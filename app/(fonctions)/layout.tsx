"use client";

import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  // const classes = clsx('classe-fixe', { 'classe-conditionnelle': condition });

  return (
    <main className=" fixed grid grid-cols-[250px,1fr] w-full">
      <ul className="flex flex-col p-2 bg-black ">
        <li className="m-2 font-bold text-center text-2xl flex justify-center items-center flex-col w-full">
          <a href="/">
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              alt="le logo de tomorrow"
            />
          </a>
        </li>
        <li className={clsx("gap-1 mt-2 hover:bg-gray-800 p-2 rounded transition duration-300",{"bg-gray-900 ": path=='/correcteur'})}>
          <a href="/correcteur">Correcteur</a>
        </li>
        <li className={clsx("gap-1 mt-2 hover:bg-gray-800 p-2 rounded transition duration-300",{"bg-gray-900 ": path=='/traducteur'})}>
          <a href="/traducteur">Traducteur</a>
        </li>
        <li className={clsx("gap-1 mt-2 hover:bg-gray-800 p-2 rounded transition duration-300",{"bg-gray-900 ": path=='/curricilum-bot'})}>
          <a href="/curricilum-bot">Curricilum Bot</a>
        </li>
      </ul>

      {children}
    </main>
  );
}
