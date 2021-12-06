import clsx from "clsx";
import React, { useState } from "react";
import style from "./signup.module.css";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../queries/mutation";

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const specialCharactersRegex = /[^\w\s]/gi;

const successfullButton = (
  <>
    <div className={style["center-content"]}>
      <div className={style["success-checkmark"]}>
        <div className={style["check-icon"]}>
          <span className={clsx(style["icon-line"], style["line-tip"])}></span>
          <span className={clsx(style["icon-line"], style["line-long"])}></span>
          <div className={style["icon-circle"]}></div>
          <div className={style["icon-fix"]}></div>
        </div>
      </div>
      <center>
        <h4>Signup successfully!</h4>
        <Link href="/signin">
          <a>
            <h5>Sign in now!</h5>
          </a>
        </Link>
      </center>
    </div>
  </>
);

const SignUp = ({ props }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const [createSuccessful, setCreateSuccessFul] = useState(false);

  const showPass = (e) => {
    e.preventDefault();
    let password = document.getElementById("password");
    let show = document.getElementById("show-pass");
    if (password.type === "password") {
      password.type = "text";
      show.textContent = "Hide";
    } else {
      password.type = "password";
      show.textContent = "Show";
    }
  };

  const [createUser, { data, error, loading, reset, called }] = useMutation(
    CREATE_USER
  );

  function submitForm(e) {
    e.preventDefault();
    const name = userName.trim(),
      emaill = email.trim(),
      emailValid = emailRegex.test(emaill),
      pass = password.trim();

    if (!name) setUserNameErr(true);
    if (!emaill) setEmailErr(true);
    if (!pass) setPasswordErr(true);
    if (emailValid) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    if (!name || !emaill || !pass || !emailValid) return;

    return createUser({
      variables: {
        username: name,
        password: pass,
        email: emaill,
      },
    })
      .then((res) => {
        console.log("success", res);
        setCreateSuccessFul(true);

        setTimeout(() => window.location.replace("/signin"), 1000);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  function onChange(e) {
    e.preventDefault();
    const spaces = /\s+/g;
    let value = e.target.value.replace(spaces, " ").trim();
    const isEmpty = value == "";
    switch (e.target.name) {
      case "username": {
        value = value.replaceAll(specialCharactersRegex, "");
        if (value == "") setUserNameErr(true);
        else setUserNameErr(false);
        setUsername(value);
        break;
      }
      case "email": {
        value = value.replaceAll(specialCharactersRegex, "");
        if (value == "") {
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

  const duplicateUserName = error && error.message.search("duplicate key") > -1;
  const unknowError = error && !duplicateUserName;

  return (
    <div className={style.wrap}>
      <img className={style.imgUp} src="/assets/images/bg-up.png" />
      <div className={style.wrapContainer}>
        <div>
          {unknowError ? (
            <div className={clsx(style["create-error"], style.titleBox)}>
              Có lỗi xảy ra, vui lòng thử lại!
            </div>
          ) : (
            <div className={style.titleBox}>Let&apos;s go!</div>
          )}
        </div>

        <div className={style["form-container"]}>
          {createSuccessful ? (
            successfullButton
          ) : (
            <form
              onSubmit={submitForm}
              method="post"
              className={style.divInput}
            >
              <div className={style.wrapInput}>
                <div className={style.groupUser}>
                  <span
                    className={clsx(style.label, userNameErr && style.errInput)}
                  >
                    Tên đăng nhập
                  </span>
                  <img
                    className={clsx(
                      style.iconUser,
                      userNameErr && style.iconErr
                    )}
                    src="/assets/user-icon.svg"
                  />
                  <input
                    className={clsx(style.inputTextUser)}
                    placeholder="UserName"
                    value={userName}
                    name="username"
                    onChange={onChange}
                    disabled={loading}
                  />
                  {userNameErr && (
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

                  {duplicateUserName && (
                    <div className={style.groupErr}>
                      <img
                        src=" /assets/warning-svgrepo-com.svg"
                        className={style.iconWarn}
                      />
                      <span className={style.requireErr}>
                        Tên đăng nhập đã tồn tại
                      </span>
                    </div>
                  )}
                </div>
                <div className={style.groupEmail}>
                  <span
                    className={clsx(
                      style.label,
                      (!emailValid || emailErr) && style.errInput
                    )}
                  >
                    Email
                  </span>
                  <img
                    className={clsx(style.iconEmail, emailErr && style.iconErr)}
                    src="/assets/mail-send-icon.svg"
                  />
                  <input
                    className={style.inputTextEmail}
                    placeholder="example@gmail.com"
                    value={email}
                    name="email"
                    onChange={onChange}
                    autoComplete="off"
                    disabled={loading}
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
                        <span className={style.requireErr}>
                          Email is invalid!
                        </span>
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
                    className={clsx(
                      style.iconPass,
                      passwordErr && style.iconErr
                    )}
                    src="/assets/lock-icon.svg"
                  />
                  <input
                    className={style.inputTextPass}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="******"
                    onChange={onChange}
                    autoComplete="off"
                    disabled={loading}
                  />
                  <button
                    className={style.showPass}
                    id="show-pass"
                    onClick={showPass}
                    value={password}
                    disabled={loading}
                  >
                    Show
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
              <div>
                <button
                  type="submit"
                  className={style.btnSignup}
                  disabled={loading}
                >
                  {`Sign Up `}
                  {loading && (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className={style.horizontalLine}>
          <span className={style.horiText}>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
            or sign up with
          </span>
        </div>
        <div className={style.groupBtn}>
          <Link href="https://www.facebook.com/Napaglobal">
            <a target="_blank" className={style.btnFb}>
              <img
                className={style.iconFb}
                src="/assets/facebook-svgrepo-com.svg"
              />
              <span className={style.labelFb}>Facebook</span>
            </a>
          </Link>
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

export default SignUp;
