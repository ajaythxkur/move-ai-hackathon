'use client'
import Image from "next/image"
import { ConnectWallet } from "./ConnectWallet"

export default function Header(){
    return (
        <>
       <section className="py-4">
        <div className="container m-auto border border-zinc-800 bg-zinc-900 px-5 py-3 rounded-full">
            <div className="row flex items-center justify-between">
                <div className="col">
                    <Image src="/media/logo3.png" alt="logo" height={150} width={150}/>
                </div>
                <div className="col flex items-center gap-5">
                    <div className="menu">
                        <ul className="flex items-center gap-5">
                            <li>Home</li>
                            <li>Agents</li>
                            <li>Launchpad</li>
                            <li>Docs</li>
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