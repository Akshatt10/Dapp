import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop(){
//The use wallet 'hook' is used to get the wallet object inside the Airdrop component
    const wallet= useWallet();
    const {connection} = useConnection();
    
    async function sendAirdroptoUser(){
        const amount = document.getElementById("PublicKey").value
        //The connection object is used to send the airdrop
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        console.log("Airdrop sent to ", wallet.publicKey);

        alert("Airdrop sent");

        }
    return <div>
        <input id="PublicKey" type="text" placeholder="Amount"></input>
        <button onClick={sendAirdroptoUser}>Send Airdrop</button>
    </div>;

}