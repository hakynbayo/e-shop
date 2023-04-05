import React from 'react'
import ReactDOM from "react-dom";
import styles from './loader.module.scss'
import LoaderImg from "../../assets/loader.gif";

const loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={LoaderImg} alt="loadeing" />
        </div>

    </div>,

    document.getElementById("loader")
  )
}

export default loader