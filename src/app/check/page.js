"use client";

import React,{useState,useEffect} from 'react'
import {Html5QrcodeScanner} from 'html5-qrcode';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Navbar from '../component/Navbar/Navbar';
import styles from './check.module.css'
import BirthCertificate from '../component/certificate/certificate';

function page() {

  const [scanResult,setScanResult]=useState(null)
  const [isValid,setIsValid]=useState(false);
  const [info,setInfo]=useState([]);
  const contract=useSelector((state)=>state.state.contract);


  useEffect(()=>{
  const scanner=new Html5QrcodeScanner('reader',{
    qrbox:{
      width:250,
      height:250
    },
    fps:5,
  })

  scanner.render(success,error);

  function success(result){
    scanner.clear();
    setScanResult(result);
  }

  function error(err){
    console.warn(err);
  }
},[])

useEffect(() => {
  if(scanResult && contract){
  const CheckValidity= async (scanResult) => {
    try {
      const validation=await contract.checkBlockHash(scanResult);
      console.log('Users:',validation);
      setIsValid(true)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  CheckValidity(scanResult);
}

}, [scanResult]);

useEffect(()=>{

  if(isValid){
    const getUsers = async () => {
      try {
        const Users=await contract.getAllDetails();
        if(Users){
          Users.map((el)=>{
            if(el.blockHash==scanResult){
              setInfo(el);
              return;
            }
          })
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    getUsers();
  }
},[isValid])



  return (
    <div>
      <Navbar/>
      <div className={styles.box}>
     <h2>Qr Code Scanning</h2>
     {
      scanResult
      // ?<div>Success:<a href={"http://"+scanResult}>{scanResult}</a></div>
      ?<div>
        <a href={scanResult}></a>
          {/* <h3>Scan vayo</h3> */}
        </div>
      :<div id="reader"></div>
     }

     {
      isValid && (
        <>
          <h2 >Authorized Govermental Document</h2>
           <BirthCertificate
             info={info}
           />
        </>
      
      )
     }
      {
      (!isValid && scanResult )&&(
        <h2>This is Not Valid Documents please try Valid QR Code Only</h2>
      )
     }
     </div>
    </div>
  )
}

export default page