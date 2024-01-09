export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" fixed grid grid-cols-[250px,1fr] w-full">
      <ul className="flex flex-col p-2 bg-black">
        <li className="m-2 font-bold text-center text-2xl">
          <a href="/">Trow</a>
        </li>
        <li className="gap-1 mt-2 hover:bg-gray-800 bg-gray-900 p-2 rounded transition duration-300">
          <a href="/correcteur">Correcteur</a>
        </li>
        <li className="gap-1 mt-2 hover:bg-gray-800 p-2 rounded transition duration-300">
          <a href="/traducteur">Traducteur</a>
        </li>
        <li className="gap-1 mt-2 hover:bg-gray-800 p-2 rounded transition duration-300">
          <a href="/curricilum-bot">Curricilum Bot</a>
        </li>
      </ul>

      {children}
    </main>
  );
}
