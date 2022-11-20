import axios from "axios";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";

function ThemeSignUp() {
  const nav = useNavigate(); //navigation

  var [userNew, setUserNew] = useState({
    newEmail: "",
    newPassword: "",
    firstName: "",
    lastName: "",
  });

  var [regStatus, setRegStatus] = useState("");
  var [confirmPass, setConfirmPass] = useState("");

  const register = () => {
    axios
      .post("http://localhost:3001/Signup", {
        email: userNew.newEmail,
        password: userNew.newPassword,
        firstName: userNew.firstName,
        lastName: userNew.lastName,
      })
      .then((response) => {
        setRegStatus(response.data.message);

        console.log(response);
        //redirecting to login page after successfull sign up
        if (response.data.message === "Signup Successful!") {
          setTimeout(() => {
            nav("/login");
          }, 2000);
        }
      });
  };

  const confirmPassword = (x) => {
    if (x !== userNew.newPassword) {
      setRegStatus("Password does not match");
      return 1;
    } else {
      setRegStatus("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (confirmPassword(confirmPass) === 1) {
      return regStatus;
    }

    if (userNew.newEmail.includes(".com")) {
      register();
    } else {
      setRegStatus("Can not proceed! Please enter a valid email.");
    }
  };

  function colorPicker() {
    if (regStatus === "Signup Successful!") return "success";
    if (regStatus === "Can not proceed! Please enter a valid email.")
      return "danger";
    if (regStatus === "Password does not match") return "danger";
    else return "";
  }

  return (
    <div class="nk-body bg-white npc-default pg-auth">
      <div class="nk-app-root">
        <div class="nk-main ">
          <div class="nk-wrap nk-wrap-nosidebar">
            <div class="nk-content ">
              <div class="nk-block nk-block-middle nk-auth-body wide-xs">
                <div class="brand-logo pb-4 text-center">
                  <a href="html/index.html" class="logo-link">
                    <img
                      class="logo-light logo-img logo-img-lg"
                      src="./images/logo.png"
                      srcset="./images/logo2x.png 2x"
                      alt="logo"
                    />
                    <img
                      class="logo-dark logo-img logo-img-lg"
                      src="./images/logo-dark.png"
                      srcset="./images/logo-dark2x.png 2x"
                      alt="logo-dark"
                    />
                  </a>
                </div>
                <div class="card">
                  <div class="card-inner card-inner-lg">
                    <div class="nk-block-head">
                      <Alert key={colorPicker()} variant={colorPicker()}>
                        {regStatus}
                      </Alert>
                      <div class="nk-block-head-content">
                        <h4 class="nk-block-title">Register</h4>
                        <div class="nk-block-des">
                          <p>Create New Dashlite Account</p>
                        </div>
                      </div>
                    </div>
                    <form action="" onSubmit={submitHandler}>
                      <div class="form-group">
                        <label class="form-label" for="name">
                          First Name
                        </label>
                        <div class="form-control-wrap">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="name"
                            placeholder="Enter your first name"
                            onChange={(e) =>
                              setUserNew({
                                ...userNew,
                                firstName: e.target.value,
                              })
                            }
                            value={userNew.firstName}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="name">
                          Last Name
                        </label>
                        <div class="form-control-wrap">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="name"
                            placeholder="Enter your last name"
                            onChange={(e) =>
                              setUserNew({
                                ...userNew,
                                lastName: e.target.value,
                              })
                            }
                            value={userNew.lastName}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="email">
                          Email or Username
                        </label>
                        <div class="form-control-wrap">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="email"
                            placeholder="Enter your email address or username"
                            onChange={(e) =>
                              setUserNew({
                                ...userNew,
                                newEmail: e.target.value,
                              })
                            }
                            value={userNew.newEmail}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="password">
                          Passcode
                        </label>
                        <div class="form-control-wrap">
                          <a
                            href="."
                            class="form-icon form-icon-right passcode-switch lg"
                            data-target="password"
                          >
                            <em class="passcode-icon icon-show icon ni ni-eye"></em>
                            <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                          </a>
                          <input
                            type="password"
                            class="form-control form-control-lg"
                            id="password"
                            placeholder="Enter your passcode"
                            onChange={(e) =>
                              setUserNew({
                                ...userNew,
                                newPassword: e.target.value,
                              })
                            }
                            value={userNew.newPassword}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="password">
                          Confirm Passcode
                        </label>
                        <div class="form-control-wrap">
                          <a
                            href="."
                            class="form-icon form-icon-right passcode-switch lg"
                            data-target="password"
                          >
                            <em class="passcode-icon icon-show icon ni ni-eye"></em>
                            <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                          </a>
                          <input
                            type="password"
                            class="form-control form-control-lg"
                            id="password"
                            placeholder="Enter your passcode"
                            onChange={(e) => setConfirmPass(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-control-xs custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="checkbox"
                          />
                          <label class="custom-control-label" for="checkbox">
                            I agree to Dashlite <a href=".">Privacy Policy</a>{" "}
                            &amp; <a href="."> Terms.</a>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <button class="btn btn-lg btn-primary btn-block">
                          Register
                        </button>
                      </div>
                    </form>
                    <div class="form-note-s2 text-center pt-4">
                      {" "}
                      Already have an account?
                      <Link className="login-link" to="/Login">
                        Sign in{" "}
                      </Link>
                    </div>
                    <div class="text-center pt-4 pb-3">
                      <h6 class="overline-title overline-title-sap">
                        <span>OR</span>
                      </h6>
                    </div>
                    <ul class="nav justify-center gx-8">
                      <li class="nav-item">
                        <a class="nav-link" href=".">
                          Facebook
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href=".">
                          Google
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="nk-footer nk-auth-footer-full">
                <div class="container wide-lg">
                  <div class="row g-3">
                    <div class="col-lg-6 order-lg-last">
                      <ul class="nav nav-sm justify-content-center justify-content-lg-end">
                        <li class="nav-item">
                          <a class="nav-link" href=".">
                            Terms & Condition
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href=".">
                            Privacy Policy
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href=".">
                            Help
                          </a>
                        </li>
                        <li class="nav-item dropup">
                          <a
                            class="dropdown-toggle dropdown-indicator has-indicator nav-link"
                            data-bs-toggle="dropdown"
                            data-offset="0,10"
                            href="."
                          >
                            <span>English</span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="language-list">
                              <li>
                                <a href="." class="language-item">
                                  <img
                                    src="./images/flags/english.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">English</span>
                                </a>
                              </li>
                              <li>
                                <a href="." class="language-item">
                                  <img
                                    src="./images/flags/spanish.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Español</span>
                                </a>
                              </li>
                              <li>
                                <a href="." class="language-item">
                                  <img
                                    src="./images/flags/french.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Français</span>
                                </a>
                              </li>
                              <li>
                                <a href="." class="language-item">
                                  <img
                                    src="./images/flags/turkey.png"
                                    alt=""
                                    class="language-flag"
                                  />
                                  <span class="language-name">Türkçe</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <div class="nk-block-content text-center text-lg-left">
                        <p class="text-soft">
                          &copy; 2022 CryptoLite. All Rights Reserved.
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

      <div class="modal fade" tabindex="-1" role="dialog" id="region">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <a href="." class="close" data-bs-dismiss="modal">
              <em class="icon ni ni-cross-sm"></em>
            </a>
            <div class="modal-body modal-body-md">
              <h5 class="title mb-4">Select Your Country</h5>
              <div class="nk-country-region">
                <ul class="country-list text-center gy-2">
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/arg.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Argentina</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/aus.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Australia</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/bangladesh.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Bangladesh</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/canada.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">
                        Canada <small>(English)</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/china.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Centrafricaine</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/china.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">China</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/french.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">France</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/germany.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Germany</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/iran.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Iran</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/italy.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Italy</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/mexico.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">México</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/philipine.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Philippines</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/portugal.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Portugal</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/s-africa.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">South Africa</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/spanish.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Spain</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/switzerland.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">Switzerland</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/uk.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">United Kingdom</span>
                    </a>
                  </li>
                  <li>
                    <a href="." class="country-item">
                      <img
                        src="./images/flags/english.png"
                        alt=""
                        class="country-flag"
                      />
                      <span class="country-name">United State</span>
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

export default ThemeSignUp;
