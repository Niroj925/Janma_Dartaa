"use client";
import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import { setActive } from '@/app/features/slicer/activeSlicer';

function Navbar() {
    
    const dispatch=useDispatch();
    const activeIndex=useSelector((state)=>state.index.active);
    console.log(activeIndex);

// const [active,setActive]=useState(1);
const [open,setOpen]=useState(false);

    const menuItems=[
        {
          menu:"Home",
          link:"/",
        },
        {
          menu:"Register",
          link:"/register",
        },
        {
          menu:"Check",
          link:"/check",
        },
        
        {
          menu:"Users",
          link:"/users",
        },
        {
          menu:"Certificate",
          link:"/certificate",
        },
      ];
       
return (
    <div className={styles.NavBar}>
        <div className={styles.NavBar_box_appbar}>
          {/* for desktop version */}

       <div className={styles.NavBar_box_appbar_menu}>
      {menuItems.map((el,i)=>(
        <div
        onClick={()=>
        //   setActive(i+1)
        dispatch(setActive(i+1))
        }
        key={i+1}
        className={`${styles.NavBar_box_appbar_menu_items}`}
        >
          <Link 
          className={styles.NavBar_box_appbar_menu_items_link}
          href={el.link}
          >
            {el.menu}
          </Link>
          </div>
      ))}
      

       </div>

       {/* for mobile */}
       {open&&(
         <div className={styles.mobile_menu}>
         {menuItems.map((el,i)=>(
           <div
           onClick={()=>
            // setActive(i+1)
            dispatch(setActive(i+1))
          }
           key={i+1}
           className={`${styles.mobile_menu_items} ${
             activeIndex==i+1?styles.active_btn:""
           }`}
           >
             <Link 
             className={styles.mobile_menu_items_link}
             href={el.link}
             >
               {el.menu}
             </Link>
             </div>
         ))}
         <p className={styles.mobile_menu_btn}>
            <Image
            src='/image/cross.png'
            alt='close'
            width={50}
            height={50}
            onClick={()=>setOpen(false)}
            />
         </p>
          </div>
       )}

             <div
             className={styles.NavBar_box_menu_open}
             onClick={()=>setOpen(true)}
             >
              <Image src='/image/menu.png' alt='open' width={30} height={30}/>
             </div>

      </div>
     {/* Model component */}
     {/* {open&&(
      <div className={styles.modelBox}>
        <Form/>
        </div>
     )} */}
     {/* {error==""?"":<Error error={error}/>} */}
    </div>
  )
}

export default Navbar