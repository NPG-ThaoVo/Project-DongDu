import Head from "next/head";
import { useState, useEffect } from "react";
const TouchForm = (props) => {
  const [error, setError] = useState(["", "", "", "", ""]);
  const [status, setStatus] = useState([1, 1, 1, 1, 1]);
  const [fullname, setFullname] = useState("");
  const [phoneNumbber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmptyField = fullname === "" || email === "" || message === "";
    const isError = isEmptyField || error.slice(-4).join("").length !== 0;
    if (!isError) {
      // handle submit form
      console.log(
        "value submit:",
        fullname,
        // lastname,
        // phoneNumbber,
        email,
        message
      );
    } else {
      console.log(error);
    }
  };
  const handleError = (message, tagname, index) => {
    let cloneStatus = status.slice();
    if (message != "") {
      cloneStatus[index] = 0;
      $(".waituk_contact-form").find(`#${tagname}`).css({
        boxShadow:
          "rgba(255, 0, 0, 0.12) 0px 2px 4px 0px, rgba(255, 0, 0, 0.32) 0px 2px 16px 0px",
      }); //.addClass("warning");
    } else {
      cloneStatus[index] = 1;
      $(".waituk_contact-form").find(`#${tagname}`).removeAttr("style"); //.removeClass("warning");
    }
    setStatus(cloneStatus);
    let cloneError = error.slice();
    cloneError[index] = message;
    setError(cloneError);
  };
  const handleOnchange = (e, action = "on-change") => {
    // console.log(e.target.name, e.target.value);
    switch (e.target.name) {
      case "con_fname": {
        // const regex = /^[a-zA-Z ]*$/;
        var regex =
          /^((?![0-9\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\[\]\{\}\;\:\"\\\/\<\>\?]).)*$/;
        if (e.target.value.length === 0) {
          handleError("Fullname is required!", "con_fname", 1);
        } else if (e.target.value.length > 150) {
          handleError("Fullname is maximum 150 characters!", "con_fname", 1);
          break;
        } else {
          handleError("", "con_fname", 1);
        }
        if (regex.test(e.target.value)) {
          setFullname(e.target.value);
        }

        break;
      }
      case "con_phone": {
        const regex = /^[0-9]*$/;
        if (action == "on-blur") {
          if (!regex.test(e.target.value) || e.target.value.length < 10) {
            handleError(
              "Length of phone number input must more than or equal to 10 digits !",
              "con_phone",
              2
            );
            break;
          } else {
            handleError("", "con_phone", 2);
            break;
          }
        }
        if (regex.test(e.target.value) && e.target.value.length < 12) {
          setPhoneNumber(e.target.value);
        }
        break;
      }
      case "con_email": {
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (action == "on-blur") {
          if (e.target.value.length === 0) {
            handleError("Email is required!", "con_email", 3);
          } else if (regex.test(e.target.value)) {
            handleError("", "con_email", 3);
            break;
          } else {
            handleError("Email is Invalid !", "con_email", 3);
            break;
          }
        }
        if (e.target.value.length > 150) {
          break;
        }
        setEmail(e.target.value);

        break;
      }
      case "con_message": {
        // const regex = /^[a-zA-Z0-9_.-]*$/;
        // if (action == "on-blur") {
        //   if (regex.test(e.target.value)) {
        //     handleError("", "con_message", 4);
        //     break;
        //   } else {
        //     handleError("Message is Invalid !", "con_message", 4);
        //     break;
        //   }
        // }
        if (e.target.value.length === 0) {
          handleError("Message is required!", "con_message", 4);
        } else if (e.target.value.length > 1000) {
          handleError("Message is maximum 1000 characters!", "con_message", 4);
          break;
        } else {
          handleError("", "con_message", 4);
        }
        // console.log(e.target.value);
        setMessage(e.target.value);
        break;
      }
    }
  };
  return (
    <div>
      <Head>
        <link
          key="/css/contact-banner.css"
          rel="stylesheet"
          href="/css/contact-banner.css"
        />
        <link key="/css/icomoon.css" rel="stylesheet" href="/css/icomoon.css" />
      </Head>
      <section className="content-block pb-0">
        <div className="container">
          <div className="contact-container">
            <div className="contact-title">
              <h6>GET IN TOUCH WITH US</h6>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <form
                  action="#"
                  method="post"
                  id="contact_form"
                  className="waituk_contact-form"
                  noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="HỌ VÀ TÊN *"
                          id="con_fname"
                          name="con_fname"
                          className="form-control warning"
                          value={fullname}
                          onChange={(e) => handleOnchange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="ĐỊA CHỈ EMAIL *"
                          id="con_email"
                          name="con_email"
                          className="form-control"
                          value={email}
                          onChange={(e) => handleOnchange(e)}
                          onBlur={(e) => handleOnchange(e, "on-blur")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          ĐÔNG DU KHOÁ: (Dành cho du học sinh Đông Du)
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="NỘI DUNG *"
                      id="con_message"
                      name="con_message"
                      value={message}
                      onChange={(e) => handleOnchange(e)}
                      onBlur={(e) => handleOnchange(e, "on-blur")}
                    ></textarea>
                  </div>
                  <div className="btn-container">
                    {/* <button
                      id="btn_sent"
                      className="btn btn-primary btn-arrow btn-send-message"
                      onClick={handleSubmit}
                    >
                      SEND MESSAGE
                      <span className="custom-icon-angle-right"></span>
                    </button> */}
                    <button className="btn contact-btn-send-wrap">
                      <div className="contact-btn-send">
                        <div>
                          <span>SEND MESSAGE</span>
                          <span className="custom-icon-angle-right"></span>
                        </div>
                      </div>
                    </button>
                    <div id="error_message" style={{ color: "red" }}>
                      {error.map((itemErr, index) => {
                        if (!status[index]) {
                          return (
                            <div key={index}>
                              <p
                                style={{
                                  fontWeight: "bold",
                                  margin: 10,
                                  padding: 0,
                                }}
                              >
                                {itemErr}
                              </p>
                            </div>
                          );
                        }
                        return <div key={index}></div>;
                      })}
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-xl-5 ml-xl-auto">
                <div className="info-slot">
                  <div className="icon">
                    <span className="custom-icon-map-marker"></span>
                  </div>
                  <div className="text">
                    <address>
                      707 London Road, Isleworth
                      <br />
                      Middlesex, TW7 7QD
                      <br />
                      United Kingdom
                    </address>
                  </div>
                </div>
                <div className="info-slot">
                  <div className="icon">
                    <span className="custom-icon-headset"></span>
                  </div>
                  <div className="text">
                    <ul className="content-list contact-list">
                      <li>
                        <span className="label-text">HELPLINE</span>{" "}
                        <a href="tel:02078777777">(020) 7877 7777</a>
                      </li>
                      <li>
                        <span className="label-text">ENQUIRIE</span>{" "}
                        <a href="tel:02078777777">(020) 7877 7777</a>
                      </li>
                      <li>
                        <span className="label-text">FAX</span>{" "}
                        <a href="tel:02078777777">(020) 7877 7777</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="info-slot">
                  <div className="icon">
                    <span className="custom-icon-message"></span>
                  </div>
                  <div className="text">
                    <ul className="content-list contact-list">
                      <li>
                        <a href="mailto:support@roxine-online">
                          support@roxine-online
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@roxine-online.com">
                          info@roxine-online.com
                        </a>
                      </li>
                      <li>
                        <a href="mailto:help@roxine-online.com">
                          help@roxine-online.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouchForm;
