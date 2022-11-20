import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
// import "./editName.css";

function EditPage() {
  const nav = useNavigate();

  useEffect(() => {
    const checkerMail = localStorage.getItem("Email");

    if (checkerMail === null) {
      nav("/Dashboard");
    }
  });

  const [newName, setNewName] = useState({
    firstName: "",
    lastName: "",
  });
  const [Status, setStatus] = useState("");

  var editName = () => {
    const userEmail = localStorage.getItem("Email");

    axios
      .post("http://localhost:3001/EditPage", {
        email: userEmail,
        firstName: newName.firstName,
        lastName: newName.lastName,
      })
      .then((response) => {
        setStatus(response.data.message);
        if (response.data.message === "Name change successful!") {
          setTimeout(() => {
            nav("/Dashboard");
          }, 2000);
        }
      });
  };

  function toDashboard() {
    nav("/Dashboard");
  }

  function submitHandler() {
    console.log(newName);

    if (newName.firstName !== "" || newName.lastName !== "") {
      editName();
    } else {
      setStatus("Please enter a valid name");
    }
  }

  function colorPicker() {
    if (Status === "Name change successful!") return "success";

    if (Status === "Error" || Status === "Please enter a valid name")
      return "danger";
    else return "";
  }

  return (
    <body className="nk-body bg-lighter npc-general has-sidebar ">
      <div className="nk-app-root">
        <div className="nk-main ">
          <div
            className="nk-sidebar nk-sidebar-fixed is-light "
            data-content="sidebarMenu"
          >
            <div className="nk-sidebar-element nk-sidebar-head">
              <div className="nk-sidebar-brand">
                <a href="html/index.html" className="logo-link nk-sidebar-logo">
                  <img
                    className="logo-light logo-img"
                    src="./images/logo.png"
                    srcset="./images/logo2x.png 2x"
                    alt="logo"
                  />
                  <img
                    className="logo-dark logo-img"
                    src="./images/logo-dark.png"
                    srcset="./images/logo-dark2x.png 2x"
                    alt="logo-dark"
                  />
                  <img
                    className="logo-small logo-img logo-img-small"
                    src="./images/logo-small.png"
                    srcset="./images/logo-small2x.png 2x"
                    alt="logo-small"
                  />
                </a>
              </div>
              <div className="nk-menu-trigger me-n2">
                <a
                  href="."
                  className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                  data-target="sidebarMenu"
                >
                  <em className="icon ni ni-arrow-left"></em>
                </a>
                <a
                  href="."
                  className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                  data-target="sidebarMenu"
                >
                  <em className="icon ni ni-menu"></em>
                </a>
              </div>
            </div>
            <div className="nk-sidebar-element">
              <div className="nk-sidebar-content">
                <div className="nk-sidebar-menu" data-simplebar>
                  <ul className="nk-menu">
                    <li className="nk-menu-item">
                      <a onClick={toDashboard} className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-dashboard-fill"></em>
                        </span>
                        <span className="nk-menu-text">Dashboard</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/ecommerce/orders.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-bag-fill"></em>
                        </span>
                        <span className="nk-menu-text">Orders</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/ecommerce/products.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-package-fill"></em>
                        </span>
                        <span className="nk-menu-text">Products</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/ecommerce/customers.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-users-fill"></em>
                        </span>
                        <span className="nk-menu-text">Customers</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/ecommerce/supports.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-chat-fill"></em>
                        </span>
                        <span className="nk-menu-text">Supports</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/ecommerce/settings.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-opt-alt-fill"></em>
                        </span>
                        <span className="nk-menu-text">Settings</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/ecommerce/integration.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-server-fill"></em>
                        </span>
                        <span className="nk-menu-text">Integration</span>
                      </a>
                    </li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">
                        Return to
                      </h6>
                    </li>
                    <li className="nk-menu-item">
                      <a href="html/index.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-dashlite-alt"></em>
                        </span>
                        <span className="nk-menu-text">Main Dashboard</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a href="html/components.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-layers-fill"></em>
                        </span>
                        <span className="nk-menu-text">All Components</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="nk-wrap ">
            <div className="nk-content ">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">
                            Edit Credentials
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block">
                      <div className="card">
                        <div className="card-inner">
                          <h5 className="card-title">Settings</h5>
                          <Alert key={colorPicker()} variant={colorPicker()}>
                            {Status}
                          </Alert>
                          <p></p>
                          <form action="." className="gy-3 form-settings">
                            <div className="row g-3 align-center">
                              <div className="col-lg-5">
                                <div className="form-group">
                                  <label className="form-label" for="site-name">
                                    First Name
                                  </label>
                                  <span className="form-note">
                                    Specify your first name.
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-7">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="site-name"
                                      placeholder="Enter your first name here"
                                      onChange={(e) =>
                                        setNewName({
                                          ...newName,
                                          firstName: e.target.value,
                                        })
                                      }
                                      value={newName.firstName}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row g-3 align-center">
                              <div className="col-lg-5">
                                <div className="form-group">
                                  <label
                                    className="form-label"
                                    for="site-email"
                                  >
                                    Last Name
                                  </label>
                                  <span className="form-note">
                                    Specify the your last name
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-7">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="site-email"
                                      placeholder="Enter your last name here"
                                      onChange={(e) =>
                                        setNewName({
                                          ...newName,
                                          lastName: e.target.value,
                                        })
                                      }
                                      value={newName.lastName}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row g-3">
                              <div className="col-lg-7 offset-lg-5">
                                <div className="form-group mt-2">
                                  <Button
                                    classNameName=""
                                    variant="secondary"
                                    onClick={submitHandler}
                                  >
                                    Confirm
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nk-footer">
              <div className="container-fluid">
                <div className="nk-footer-wrap">
                  <div className="nk-footer-copyright">
                    {" "}
                    &copy; 2022 DashLite. Template by{" "}
                    <a href="https://softnio.com" target="_blank">
                      Softnio
                    </a>
                  </div>
                  <div className="nk-footer-links">
                    <ul className="nav nav-sm">
                      <li className="nav-item dropup">
                        <a
                          href="."
                          className="dropdown-toggle dropdown-indicator has-indicator nav-link text-base"
                          data-bs-toggle="dropdown"
                          data-offset="0,10"
                        >
                          <span>English</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="language-list">
                            <li>
                              <a href="." className="language-item">
                                <span className="language-name">English</span>
                              </a>
                            </li>
                            <li>
                              <a href="." className="language-item">
                                <span className="language-name">Español</span>
                              </a>
                            </li>
                            <li>
                              <a href="." className="language-item">
                                <span className="language-name">Français</span>
                              </a>
                            </li>
                            <li>
                              <a href="." className="language-item">
                                <span className="language-name">Türkçe</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          data-bs-toggle="modal"
                          href=".region"
                          className="nav-link"
                        >
                          <em className="icon ni ni-globe"></em>
                          <span className="ms-1">Select Region</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                        src="./images/flags/arg.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Argentina</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/aus.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Australia</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/bangladesh.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Bangladesh</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/canada.png"
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
                        src="./images/flags/china.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Centrafricaine</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/china.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">China</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/french.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">France</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/germany.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Germany</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/iran.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Iran</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/italy.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Italy</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/mexico.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">México</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/philipine.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Philippines</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/portugal.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Portugal</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/s-africa.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">South Africa</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/spanish.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Spain</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/switzerland.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Switzerland</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/uk.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">United Kingdom</span>
                    </a>
                  </li>
                  <li>
                    <a href="." className="country-item">
                      <img
                        src="./images/flags/english.png"
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
    </body>
  );
}

export default EditPage;
