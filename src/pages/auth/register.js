import React from 'react'
import styles from './auth.module.scss'
import RegisterImg from "../../assets/register.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";

const register = () => {
  return (
    <section className={`container ${styles.auth}`}>
    
    <Card>
      <div className={styles.form}>
        <h2>Register</h2>

        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
          <button className="--btn --btn-primary --btn-block">Register</button>
          <span className={styles.register}>
            <p>
              {" "}
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </span>
        </form>
      </div>
    </Card>

    <div className={styles.img}>
      <img src={RegisterImg} width="400px" alt="phone icon" />
    </div>
  </section>
  )
}

export default register