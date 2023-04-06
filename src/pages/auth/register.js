import React, { useState } from "react";
import styles from "./auth.module.scss";
import RegisterImg from "../../assets/register.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    }

    setIsLoading(true);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setIsLoading(false);
    toast.success("Registration Successful");
    navigate('/login')
  })
  .catch((error) => {
    error.message =("Error Creating User")
    toast.error(error.message);
    setIsLoading(false);
    // ..
  });
}

  return (
    <>
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>

          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
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
    </>
  );
};

export default Register;
