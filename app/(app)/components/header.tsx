"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useUrlHash } from "../utils/useUrlHash";

export default function Header() {
  const hashPath = useUrlHash();
  const pathname = usePathname();

  const active = (current) =>
    hashPath === current || pathname === current
      ? "shadow-[inset_0_-2px_0px_rgba(0,0,0,1)]"
      : "";

  return (
    <header className="absolute left-0 right-0 top-0 z-10 mx-auto h-24 w-screen bg-white bg-opacity-60 p-6 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/#home">
            <Image src="/logo.svg" alt="Logo" width={250} height={50} />
          </Link>
          <nav className="flex items-center space-x-4 font-display">
            <Link className={"text-black " + active("#about")} href="/#about">
              About
            </Link>
            <Link
              className={"text-black " + active("/beliefs")}
              href="/beliefs"
            >
              Our beliefs
            </Link>
            <Link
              className={"text-black " + active("/leadership")}
              href="/leadership"
            >
              Leadership
            </Link>
            <Link className={"text-black " + active("#gospel")} href="/#gospel">
              What is the gospel?
            </Link>
            <Link
              className={"text-black " + active("/sermons")}
              href="/sermons"
            >
              Sermons
            </Link>
            <Link
              className={"text-black " + active("#contact")}
              href="/#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
