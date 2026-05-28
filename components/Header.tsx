import Image from "next/image";
import Link from "next/link";

// D:\zentronix\components\Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 py-4 md:px-8 bg-white/80 backdrop-blur-xl border-b border-gray-200 transition-colors duration-300 shadow-sm font-urbanist">
      <Link href="/" className="flex items-center gap-3 cursor-pointer text-[36px] font-bold">
        <Image src={"/images/favicon.png"} alt='Zentorex Logo' width={50} height={50} className="drop-shadow-sm" />
        <span className="tracking-tight">Zentorex <span className="font-lobster font-normal text-indigo-600">AI</span></span>
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/chat"
          className="inline-flex items-center justify-center rounded-full leading-none transition-all duration-300 cursor-pointer px-6 py-3 text-white bg-black text-[20px] font-semibold shadow-md hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5"
        >
          Start Building
        </Link>
      </div>
    </header>
  )
}