'use client'
import Image from "next/image"
import SplashCursor from '@/ui/cursor'
import Link from "next/link"
import { ConnectWallet } from "./ConnectWallet"

export default function Header() {
    return (
        <>
        {/* <SplashCursor /> */}
            <section className="py-4">
                <div className="container m-auto border border-dotted border-zinc-800 bg-zinc-900/90 px-5 py-3 rounded-full z-50 relative">
                    <div className="row flex items-center justify-between">
                        <div className="col">
                            <Image src="/media/logo3.png" alt="logo" height={150} width={150} />
                        </div>
                        <div className="col flex items-center gap-5">
                            <div className="menu">
                                <ul className="flex items-center gap-5">
                                    <Link href="/"><li className="hover:text-cyan-800 transition">Home</li></Link>
                                    <Link href="/#agents"><li className="hover:text-cyan-800 transition">Agents</li></Link>
                                    <Link href="/#"><li className="hover:text-cyan-800 transition">Launchpad</li></Link>
                                    <Link href="/#"><li className="hover:text-cyan-800 transition">Docs</li></Link>
                                </ul>
                            </div>
                            <ConnectWallet />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}