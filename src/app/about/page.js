"use client";
import React, { useState,useEffect } from 'react'
import styles from'./alluser.module.css'
import Navbar from '../component/Navbar/Navbar';
import {useDispatch, useSelector, } from 'react-redux';

function alluser() {
  const contract=useSelector((state)=>state.state.contract);
const[userLists,setUserLists]=useState([]);

const [searchQuery, setSearchQuery] = useState('');

const filteredUserLists = userLists.filter((user) =>
  user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
);

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
         <div className={styles.search}>
        <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
     </div>
        <div className={styles.userListContainer}>
        {filteredUserLists.map((el, i) => (
      
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