import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { isJwtExpired } from "jwt-check-expiration";

function ThemeLogin() {
  const nav = useNavigate(); //navigation

  //Hooks
  var [User, setUser] = useState({
    email: "",
    password: "",
  });

  var [loginStatus, setLoginstatus] = useState("");

  //session maintainer
  useEffect(() => {
    const checkerMail = localStorage.getItem("Email");

    if (checkerMail && expiryChecker() === false) {
      nav("/Dashboard");
    } else {
      localStorage.clear();
    }
  });

  const expiryChecker = () => {
    return isJwtExpired(localStorage.getItem("Password"));
  };

  //Requesting Backend
  const register = () => {
    axios
      .post("http://localhost:3001/Login", {
        email: User.email,
        password: User.password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginstatus(response.data.message);
        } else {
          setLoginstatus(response.data.email);

          // console.log('isExpired is:', isJwtExpired(response.data.password));
          setData(response.data.email, response.data.password);
          Redirector();
        }
      });
  };

  // Storing data in session
  function setData(email, password) {
    localStorage.setItem("Email", email); //storing email in session
    localStorage.setItem("Password", password); //storing password in session
  }

  function Redirector() {
    nav("/Dashboard ");
  }

  const submitHandler = (e) => {
    e.preventDefault();

    register();

    // console.log(User);
  };

  return (
    <div className="nk-body bg-white npc-default pg-auth no-touch nk-nio-theme as-mobile">
      <div className="nk-app-root">
        <div className="nk-main ">
          <div className="nk-wrap nk-wrap-nosidebar">
            <div className="nk-content ">
              <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
                <div className="brand-logo pb-4 text-center">
                  <a href="html/index.html" className="logo-link">
                    <img
                      className="logo-light logo-img logo-img-lg"
                      src="images/logo.png"
                      srcset="images/logo-dark2x.png"
                      alt="logo"
                    />
                    <img
                      className="logo-dark logo-img logo-img-lg"
                      src="images/logo-dark.png"
                      srcset="images/logo-dark2x.png 2x"
                      alt="logo-dark"
                    />
                  </a>
                </div>
                <div className="card">
                  <div className="card-inner card-inner-lg">
                    <Alert
                      key={loginStatus === "" ? "" : "danger"}
                      variant={loginStatus === "" ? "" : "danger"}
                    >
                      {loginStatus}
                    </Alert>
                    <div className="nk-block-head">
                      <div className="nk-block-head-content">
                        <h4 className="nk-block-title">Sign-In</h4>
                        <div className="nk-block-des">
                          <p>
                            Access the Dashlite panel using your email and
                            passcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={submitHandler}>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" for="default-01">
                            Email or Username
                          </label>
                        </div>
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="default-01"
                            placeholder="Enter your email address or username"
                            onChange={(e) =>
                              setUser({ ...User, email: e.target.value })
                            }
                            value={User.email}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" for="password">
                            Passcode
                          </label>
                        </div>
                        <div className="form-control-wrap">
                          <a
                            href="."
                            className="form-icon form-icon-right passcode-switch lg"
                            data-target="password"
                          >
                            <em className="passcode-icon icon-show icon ni ni-eye"></em>
                            <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                          </a>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="password"
                            placeholder="Enter your passcode"
                            onChange={(e) =>
                              setUser({ ...User, password: e.target.value })
                            }
                            value={User.password}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block">
                          Sign in
                        </button>
                      </div>
                    </form>
                    <div className="form-note-s2 text-center pt-4">
                      {" "}
                      New on our platform?{" "}
                      <Link to="/Signup">Don't have an account?</Link>
                    </div>
                    <div className="text-center pt-4 pb-3">
                      <h6 className="overline-title overline-title-sap">
                        <span>OR</span>
                      </h6>
                    </div>
                    <ul className="nav justify-center gx-4">
                      <li className="nav-item">
                        <a className="nav-link" href=".">
                          Facebook
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href=".">
                          Google
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nk-footer nk-auth-footer-full">
                <div className="container wide-lg">
                  <div className="row g-3">
                    <div className="col-lg-6 order-lg-last">
                      <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                        <li className="nav-item">
                          <a className="nav-link" href=".">
                            Terms &amp; Condition
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href=".">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href=".">
                            Help
                          </a>
                        </li>
                        <li className="nav-item dropup active current-page">
                          <a
                            className="dropdown-toggle dropdown-indicator has-indicator nav-link"
                            data-bs-toggle="dropdown"
                            data-offset="0,10"
                            href="."
                          >
                            <span>English</span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul className="language-list">
                              <li>
                                <a href="." className="language-item">
                                  <img
                                    src="images/flags/english.png"
                                    alt=""
                                    className="language-flag"
                                  />
                                  <span className="language-name">English</span>
                                </a>
                              </li>
                              <li>
                                <a href="." className="language-item">
                                  <img
                                    src="images/flags/spanish.png"
                                    alt=""
                                    className="language-flag"
                                  />
                                  <span className="language-name">Español</span>
                                </a>
                              </li>
                              <li>
                                <a href="." className="language-item">
                                  <img
                                    src="images/flags/french.png"
                                    alt=""
                                    className="language-flag"
                                  />
                                  <span className="language-name">
                                    Français
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="." className="language-item">
                                  <img
                                    src="images/flags/turkey.png"
                                    alt=""
                                    className="language-flag"
                                  />
                                  <span className="language-name">Türkçe</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="nk-block-content text-center text-lg-left">
                        <p className="text-soft">
                          © 2022 Dashlite. All Rights Reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="./assets/js/bundle.js?ver=3.0.3"></script>
      <script src="./assets/js/scripts.js?ver=3.0.3"></script>

      <div className="modal fade" tabindex="-1" role="dialog" id="region">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <a href="." className="close" data-bs-dismiss="modal">
              <em className="icon ni ni-cross-sm"></em>
            </a>
            <div className="modal-body modal-body-md">
              <h5 className="title mb-4">Select Your Country</h5>
              <div className="nk-country-region">
                <ul className="country-list text-center gy-2">
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/arg.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Argentina</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/aus.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Australia</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/bangladesh.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Bangladesh</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/canada.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">
                        Canada <small>(English)</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/china.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Centrafricaine</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/china.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">China</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/french.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">France</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/germany.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Germany</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/iran.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Iran</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/italy.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Italy</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/mexico.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">México</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/philipine.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Philippines</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/portugal.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Portugal</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/s-africa.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">South Africa</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/spanish.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Spain</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/switzerland.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Switzerland</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/uk.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">United Kingdom</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="images/flags/english.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">United State</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeLogin;
