import React from 'react';
import styles from './certificate.module.css';

const BirthCertificate = ({info}) => {

  return (
    <div className={styles.certificate}>
      <h1>BIRTH CERTIFICATE</h1>
      <div className={styles.certificateNumber}>
        {/* Certificate Number: {certificateNumber} */}
        Certificate Number: XXXXXX
      </div>
      <hr />
      <div className={styles.section}>
        <h2>Child's Information:</h2>
        <div className={styles.info}>
          <div>Name: {info.name}</div>
          <div>Date of Birth: {info.dob}</div>
          <div>Place of Birth: {info.location}</div>
          <div>Gender: {info.gender}</div>
        </div>
      </div>
      <hr />
      <div className={styles.section}>
        <h2>Parents' Information:</h2>
        <div className={styles.info}>
        <div>GrandFather's Name: {info.grandFatherName}</div>
          <div>Father's Name: {info.fatherName}</div>
          <div>Mother's Name: {info.motherName}</div>
          </div>
      </div>
      <hr />
      <hr />
      <div className={styles.footer}>
        This certificate verifies that the above information is true and correct to the best of our knowledge.
        <br />
       Issued on: {new Date(info.timestamp * 1000).toLocaleString()}
      </div>
    </div>
  );
};

export default BirthCertificate;
