"use client"
import { useWallet } from "../../context/WalletProvider"
export function ConnectWallet(){
    const { connect, userAccount, disconnect } = useWallet();
    if(userAccount?.address) {
        return <button className="border rounded-full p-2 px-5" onClick={()=>disconnect()}>Disconnect {userAccount.address.toString()}</button>
    }
    return <button className="border rounded-full p-2 px-5" onClick={()=>connect()}>Connect Wallet</button>
    
}