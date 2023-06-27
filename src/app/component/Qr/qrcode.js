"use client";
import { useState } from 'react';
import QRCode from 'qrcode';
import styles from './qr.module.css';
import Image from 'next/image';
function qrcode({value}) {

    const [qrCodeData, setQRCodeData] = useState('');
 
    const generateQRCode = async (data) => {
        try {
          const qrCodeData = await QRCode.toDataURL(data);
          setQRCodeData(qrCodeData);
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      };

  return (
    <div className={styles.qr_box}>

<button className={styles.qr_generate_button} 
onClick={() => generateQRCode(value)}>Generate QR Code</button>

{qrCodeData && (
  <a
    className={styles.qr_generate_button} 
    href={qrCodeData}
    download="qrcode.png"
    target="_blank"
    rel="noopener noreferrer"
  >
     QR Code
    <Image src='/image/download.png' alt='download' width={40} height={40}/>
  </a>
)}

    </div>
  )
}

export default qrcode