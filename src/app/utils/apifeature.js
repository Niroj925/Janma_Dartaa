"use client";
import { useState, useEffect } from 'react';
import abi from '../contract/BirthRegistration.json';
import { ethers } from "ethers";
import { useDispatch, useSelector } from 'react-redux';
import {setAccount,setProvider,setSigner, setContract } from '../features/slicer/userSlicer';
import dotenv from 'dotenv';

dotenv.config();

const ContractConnector = () => {

  const dispatch = useDispatch();
 
  useEffect(() => {
    
    const connectWallet = async () => {
      const contractAddress ="0xC7879c04440c6202CaF6BD59C9ba4e1f173f0fde";
      const contractAbi = abi.abi;

      try {
        const { ethereum } = window;

        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const account = accounts[0];

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        // const state = { provider, signer, contract,account};

        dispatch(setAccount(account));
        dispatch(setProvider(provider));
        dispatch(setSigner(signer));
        dispatch(setContract(contract));
      } catch (err) {
        console.log(err);
      }
    };

    connectWallet();
  }, [dispatch]);

  // The rest of your component code (if needed)

  return null; // Return null if this component doesn't render anything
};

export default ContractConnector;
