import React, { useEffect, useState } from "react";
import "./Streams.css";
import { useMetaMask } from "metamask-react";
import { authMetamask, getOrCreateUser, getUser2 } from "./api/user";
import { ethers } from 'ethers'

function MetamaskBox() {
    const { status, connect, account } = useMetaMask();

    // useEffect(() => {
    if (status === "connected") {
        const authMetamaskWrapper = async () => {
            const web3 = new ethers.providers.Web3Provider(window.ethereum);
        //    const address = await web3.getSigner().getAddress();
            const dbUser = await getOrCreateUser(account);
            console.log(dbUser);
            const signature = await web3.getSigner().signMessage(`I am signing my one-time nonce: ${dbUser.nonce}`);
            console.log("signature");
            console.log(signature);
            const dbUserVerify = await authMetamask(account, signature);
            console.log(dbUserVerify);
            const dbUserProfile = await getUser2(account);
            
        }
        authMetamaskWrapper();
    }
    

    if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

    if (status === "unavailable") return <div>MetaMask not available :(</div>

    if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

    if (status === "connecting") return <div>Connecting...</div>
    
    if (status === "connected") {
        return <div>Connected account: {account}</div>
    }

}

export default MetamaskBox;
