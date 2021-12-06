import clsx from "clsx";
import React, { useState } from "react";
import style from "./signin.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const SignIn = ({ props }) => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [accountErr, setAccountErr] = useState("");

  function forgotPass(e) {
    e.preventDefault();
  }

  function submitForm(e) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim() === "") setEmailErr(true);
    if (password.trim() === "") setPasswordErr(true);
    if (emailRegex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    if (email.trim() === "" || password.trim() === "" || !emailValid) {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      const isAuth =
        email.trim() === "admin@obdd.com" && password.trim() === "admin123";
      if (isAuth) {
        router.push("/admin/list-blog");
      } else {
        setAccountErr("Email or password is incorrect");
      }
    }
  }

  function onChange(e) {
    e.preventDefault();
    const spaces = /\s+/g;
    const value = e.target.value.replace(spaces, " ");
    const isEmpty = value == "";
    switch (e.target.name) {
      case "email": {
        if (isEmpty) {
          setEmailErr(true);
          setEmailValid(true);
        } else {
          setEmailErr(false);
        }
        setEmail(value);
        break;
      }
      case "password": {
        if (isEmpty) setPasswordErr(true);
        else setPasswordErr(false);
        setPassword(value);
        break;
      }
    }
  }

  return (
    <div className={style.wrap}>
      <img className={style.imgUp} src="/assets/images/bg-up.png" />
      <div className={style.wrapContainer}>
        <div>
          <div className={style.titleBox}>Welcome back!</div>
        </div>
        {accountErr !== "" && (
          <div className={style.requireErr}>{accountErr}</div>
        )}
        <form
          onSubmit={submitForm}
          id="loginForm"
          method="post"
          className={style.divInput}
        >
          <div className={style.wrapInput}>
            <div className={style.groupEmail}>
              <span className={clsx(style.label, emailErr && style.errInput)}>
                Email
              </span>
              <img
                className={clsx(style.iconEmail, emailErr && style.iconErr)}
                src="/assets/mail-send-icon.svg"
              />
              <input
                className={clsx(style.inputTextEmail)}
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={onChange}
              />
              {(emailErr || !emailValid) && (
                <div className={style.groupErr}>
                  <img
                    src=" /assets/warning-svgrepo-com.svg"
                    className={style.iconWarn}
                  />
                  {emailErr && (
                    <span className={style.requireErr}>
                      This field is required!
                    </span>
                  )}
                  {!emailValid && (
                    <span className={style.requireErr}> Email is invalid!</span>
                  )}
                </div>
              )}
            </div>
            <div className={style.groupPass}>
              <span
                className={clsx(style.label, passwordErr && style.errInput)}
              >
                Choose Password
              </span>
              <img
                className={clsx(style.iconPass, passwordErr && style.iconErr)}
                src="/assets/lock-icon.svg"
              />
              <input
                className={clsx(
                  style.inputTextPass,
                  passwordErr && style.errInput
                )}
                type="password"
                placeholder="******"
                name="password"
                value={password}
                onChange={onChange}
              />
              <button className={style.forgotPass} onClick={forgotPass}>
                Forgot Password?
              </button>
              {passwordErr && (
                <div className={style.groupErr}>
                  <img
                    src=" /assets/warning-svgrepo-com.svg"
                    className={style.iconWarn}
                  />
                  <span className={style.requireErr}>
                    This field is required!
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={style.wrapBtnLogin}>
            <button type="submit" from="loginForm" className={style.btnLogin}>
              Log In
            </button>
          </div>
        </form>
        <div className={style.horizontalLine}>
          <span className={style.horiText}>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
            or login with
          </span>
        </div>
        <div className={style.groupBtn}>
          <a className={style.btnFb} href="https://www.facebook.com/Napaglobal">
            <img
              className={style.iconFb}
              src="/assets/facebook-svgrepo-com.svg"
            />
            <span className={style.labelFb}>Facebook</span>
          </a>
          <button className={style.btnGoogle}>
            <img className={style.iconGoogle} src="/assets/google-icon.svg" />
            <span className={style.labelGoogle}>Google</span>
          </button>
        </div>
      </div>
      <img className={style.imgDown} src="/assets/images/bg-down.png" />
    </div>
  );
};

export default SignIn;
