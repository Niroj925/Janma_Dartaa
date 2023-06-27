"use client";
import { ethers } from 'ethers';
import React,{useState,useContext} from 'react'
import styles from './Form.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function page() {
    const router=useRouter();
  // console.log('state in Form:',state);
  const [name,setName]=useState("");
  const [dob,setDob]=useState("");
  const [gender,setGender]=useState("");
  const [location,setLocaiton]=useState("");
  const [grandFather,setGrandFather]=useState("");
  const [father,setFather]=useState("");
  const [mother,setMother]=useState("");

  const contract=useSelector((state)=>state.state.contract);
  const account=useSelector((state)=>state.state.account);
  
//   console.log('contract:',contract)
 
    const RegisterCertificate =async(event)=>{
        event.preventDefault();
        // const name=document.querySelector("#name").value;
         const transaction=await contract.register(
            name,dob,gender,location,grandFather,father,mother
            );
         await transaction.wait();
         console.log('Transaction is success');
        console.log(transaction);
        if(transaction){
            toast.success('Registration Successful..!!!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(()=>{
                router.push('/');
              },3000)
            
        }

    }
    
    const handleCancel = (event) => {
      event.preventDefault();
      event.stopPropagation();
      router.push('/');
    };
    

  return (
    <>
    <div className={styles.Form}>
      <div className={styles.Form_box}>
             <h3>
              Fill up Detail
             </h3>
          
             <small>data are more sensitivee</small>

             <form className={styles.Form_box_right_name}>
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
                   placeholder={"Date of birth..."}
                   onChange={(e)=>setDob(e.target.value)}
                   required 
                 />
              </div>
                  
              {/* <div className={styles.Form_box_right_name_info}> */}
                <select
                  className={styles.gender_select}
                  // className={styles.Form_box_right_name_info}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option  className={styles.gender_select_option} value="">Select gender...</option>
                  <option className={styles.gender_select_option} value="Male">Male</option>
                  <option className={styles.gender_select_option} value="Female">Female</option>
                  <option className={styles.gender_select_option} value="Others">Others</option>
                </select>
              {/* </div> */}

              <div className={styles.Form_box_right_name_info}>
              <input
                   type='text'
                   id='location'
                   placeholder='Location..'
                   onChange={(e)=>setLocaiton(e.target.value)}
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
                   id='mname'
                   placeholder='Mother Name...'
                   onChange={(e)=>setMother(e.target.value)}
                   required 
                 />
              </div>
              </div>
                 <div className={styles.Form_box_right_name_btn}>
                   {/* <button
                      // onClick={()=>functionName({name,accountAddress})}
                      type='submit'
                   >
                      Submit
                   </button>

                   <button
                      onClick={()=>router.push('/')}   >
                      Cancel
                   </button> */}
                   <button type="submit" onClick={RegisterCertificate}>Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                 </div>

             </form>
        </div>     
    </div>
    <ToastContainer/>
    </>
  )
}

export default page