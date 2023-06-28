
"use client";
import React, { useState,useEffect } from 'react'
import Qrcode from '../component/Qr/qrcode'
import { useSelector } from 'react-redux';
import styles from './alluser.module.css';
import Navbar from '../component/Navbar/Navbar';
import { useRouter } from 'next/navigation';

function page() {
    const [name,setName]=useState("");
    const [fname,setFather]=useState("");
    const [gname,setGrandFather]=useState("");
    const [blockHash,setBlockHash]=useState('');
    const [userLists,setUserLists]=useState([]);
    const [isValid,setIsValid]=useState(false);

    const contract=useSelector((state)=>state.state.contract);
   
     const router=useRouter();

    useEffect(() => {
        const getUsers = async () => {
          try {
            const Users=await contract.getAllDetails();
            // console.log('Users:',Users);
            setUserLists(Users);
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        getUsers();
      }, [contract]);

      const getCertificate = () => {
        userLists.map((el,i) => {
          if (
            el.name.toLowerCase() == name.toLowerCase() &&
            el.fatherName.toLowerCase() == fname.toLowerCase() &&
            el.grandFatherName.toLowerCase() == gname.toLowerCase()
          ) {
            setBlockHash(el.blockHash);
            setIsValid(true);
            console.log('element found')
            return; 
          }
          else{
            console.log('element not found');
          }
        });
      };
      


      const handleCancel = (event) => {
        event.preventDefault();
        event.stopPropagation();
        router.push('/');
      };


  return (
    <div>
     <Navbar/>
    <div className={styles.Form}>
    <div className={styles.Form_box}>
           <h3>
            Fill up Detail
           </h3>
        
           <div className={styles.Form_box_right_name}>
              <div className={styles.field}>

            <div className={styles.Form_box_right_name_info}>
              
            <input
                 type='text'
                 id='name'
                 placeholder='Name...'
                 onChange={(e)=>setName(e.target.value)}
                 required 
               />
            </div>
    
            <div className={styles.Form_box_right_name_info}>
            <input
                 type='text'
                 id='fname'
                 placeholder='Father Name...'
                 onChange={(e)=>setFather(e.target.value)}
                 required 
               />
            </div>

            <div className={styles.Form_box_right_name_info}>
            <input
                 type='text'
                 id='gfname'
                 placeholder='Grand Father Name...'
                 onChange={(e)=>setGrandFather(e.target.value)}
                 required 
               />
            </div>

            </div>
               <div className={styles.Form_box_right_name_btn}>
                 <button type="submit" onClick={getCertificate}>Submit</button>
                  <button onClick={handleCancel}>Cancel</button>
               </div>

           </div>
      </div>     
  </div>
  {
    isValid &&(
      <Qrcode value={blockHash}/>  
    )
  }
  
    </div>
  )
}

export default page