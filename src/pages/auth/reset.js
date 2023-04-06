import React, { useState } from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";





const Reset = () => {
const [email, setEmail] = useState("");
const [isLoading, setIsLoading] = useState(false);




    const resetUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
    .then(() => {
        toast.success("Password Reset Link Sent")
        setIsLoading(false);
    })


    .catch((error) => {
        error.message = ("Error Resetting Password")
        toast.error(error.message);
        setIsLoading(false);

    });
    };
  return (
    <>
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} width="400px" alt="phone icon" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>

          <form onSubmit={resetUser}>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="--btn --btn-primary --btn-block" type="submit">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">-Login</Link>
              </p>

              <p>
                <Link to="/register">-Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
    </>
  );
};

export default Reset;
