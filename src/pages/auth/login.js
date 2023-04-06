import React, { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/card";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Login Successful");
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        error.message = ("Error Logging In")
        toast.error(error.message);
        setIsLoading(false);
      });
  };

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    toast.success("Login Successful");
    setIsLoading(false);
    navigate("/");
  }).catch((error) => {
    error.message = ("Error Logging In")
   toast.error(error.message);
   navigate("/login");
  });
}


  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} width="400px" alt="phone icon" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>

            <form onSubmit={loginUser}>
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
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset Password?</Link>
              </div>
              <p>--OR--</p>
              <button className="--btn --btn-danger --btn-block" onClick={signInWithGoogle}>
                {" "}
                <FaGoogle color="#fff" />{" "}
                <p className="--color-white">Login With Google</p>{" "}
              </button>
              <span className={styles.register}>
                <p>
                  {" "}
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </span>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
