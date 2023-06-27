"use client";
import React, { useState,useEffect } from 'react'
import styles from'./alluser.module.css'
import Navbar from '../component/Navbar/Navbar';
import {useDispatch, useSelector, } from 'react-redux';

function alluser() {
  const contract=useSelector((state)=>state.state.contract);
  const account=useSelector((state)=>state.state.account);

const[userLists,setUserLists]=useState([]);

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

  return (

   
    <div>
          <Navbar/>
        <div className={styles.alluser_info}>
            <h1>Registered Documents</h1>
        </div>
       
        <div className={styles.userListContainer}>
        {userLists.map((el, i) => (
      
          <div key={i} className={styles.userCard}>
           <p>{el.name}</p> 
           <p>{new Date(el.timestamp * 1000).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default alluser