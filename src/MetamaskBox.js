import React, { useEffect, useState } from "react";
import "./Streams.css";
import { useMetaMask } from "metamask-react";
import { authMetamask, getOrCreateUser, genOTP } from "./api/user";
import { ethers } from 'ethers'
import { useStateValue } from "./StateProvider";

const handleGenOTP = async () => {
    const response = await genOTP();
    alert(JSON.stringify(`The OTP is ${response.data.otp}`, null, 2));
}

function MetamaskBox() {
    const { status, connect, account } = useMetaMask();
    const [{}, dispatch] = useStateValue();

    if (status === "connected") { // && current_wallet != null) {
        const authMetamaskWrapper = async () => {
            const web3 = new ethers.providers.Web3Provider(window.ethereum);
            // TODO: Validate jwt token in another flow instead
            const dbUser = await getOrCreateUser(account);
            if (dbUser.nonce) {
                const signature = await web3.getSigner().signMessage(`I am signing my one-time nonce: ${dbUser.nonce}`);
                const dbUserVerify = await authMetamask(account, signature);

                localStorage.setItem("wallet_address", account);
            } 

        }
        authMetamaskWrapper();
        return (
            <div>
                <div>Connected account: {account}</div>
                <div><button onClick={handleGenOTP}>Get OTP</button></div>
            </div>
        );
    } 

    if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

    if (status === "unavailable") return <div>MetaMask not available :(</div>

    if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

    if (status === "connecting") return <div>Connecting...</div>
    
}

export default MetamaskBox;
