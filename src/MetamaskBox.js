import React, { useEffect, useState } from "react";
import "./Streams.css";
import { useMetaMask } from "metamask-react";
import { authMetamask, getOrCreateUser, genOTP } from "./api/user";
import { ethers } from 'ethers'
// import { getWalletAddress } from "./reducer";
import { useStateValue } from "./StateProvider";

const handleGenOTP = async () => {
    const response = await genOTP();
    alert(JSON.stringify(`The OTP is ${response.data.otp}`, null, 2));
}

function MetamaskBox() {
    const { status, connect, account } = useMetaMask();
    const [{}, dispatch] = useStateValue();

    // const current_wallet = getWalletAddress();
    // useEffect(() => {
    
    if (status === "connected") { // && current_wallet != null) {
        const authMetamaskWrapper = async () => {
            const web3 = new ethers.providers.Web3Provider(window.ethereum);
            // TODO: Validate jwt token in another flow instead
            const dbUser = await getOrCreateUser(account);
            console.log(dbUser);
            console.log(dbUser.nonce);
            console.log("HIEU");
            if (dbUser.nonce) {
                const signature = await web3.getSigner().signMessage(`I am signing my one-time nonce: ${dbUser.nonce}`);
                console.log("signature");
                console.log(signature);
                const dbUserVerify = await authMetamask(account, signature);
                console.log(dbUserVerify);

                // dispatch({
                //     type: "SET_METAMASK_WALLET",
                //     user: account,
                // });
                localStorage.setItem("wallet_address", account);
            } 
            // else {
            //     dispatch({
            //         type: "SET_METAMASK_WALLET",
            //         user: null,
            //     });
            // }

        }
        authMetamaskWrapper();
        return (
            <div>
                <div>Connected account: {account}</div>
                <div><button onClick={handleGenOTP}>Get OTP</button></div>
            </div>
        );
    } 
    // else {
    //     dispatch({
    //         type: "SET_METAMASK_WALLET",
    //         user: null,
    //     });
    // }
    

    if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

    if (status === "unavailable") return <div>MetaMask not available :(</div>

    if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

    if (status === "connecting") return <div>Connecting...</div>
    
}

export default MetamaskBox;
