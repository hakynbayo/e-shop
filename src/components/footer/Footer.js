import React from 'react'
import styles from './Footer.module.scss'

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    
    <div className={styles.footer}>
      &copy; {year} eShop. All rights reserved.
    </div>
  )
}

export default Footer