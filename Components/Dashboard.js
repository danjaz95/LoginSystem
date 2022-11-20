import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const nav = useNavigate(); //navigation
  // const mail = localStorage.getItem("Email");
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const userEmail = localStorage.getItem("Email");

  var getName = () => {
    axios
      .post("http://localhost:3001/Dashboard", {
        email: userEmail,
      })
      .then((response) => {
        setName({
          firstName: response.data[0].firstName,

          lastName: response.data[0].lastName,
        });
      });
  };

  function handleSubmit() {
    localStorage.clear();
    nav("/Login");
  }

  function EditName() {
    nav("/EditPage");
  }

  useEffect(() => {
    const prevData = localStorage.getItem("Email");
    getName();
    if (prevData == null) {
      handleSubmit();
    }
  });

  return (
    <div className="nk-body bg-lighter npc-default has-sidebar ">
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
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">
                        Dashboards
                      </h6>
                    </li>
                    <li className="nk-menu-item">
                      <a href="html/index.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-cart-fill"></em>
                        </span>
                        <span className="nk-menu-text">Default</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a href="html/index-sales.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-activity-round-fill"></em>
                        </span>
                        <span className="nk-menu-text">Sales</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/index-analytics.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-growth-fill"></em>
                        </span>
                        <span className="nk-menu-text">Analytics</span>
                      </a>
                    </li>

                    <li className="nk-menu-item">
                      <a className="nk-menu-link " onClick={EditName}>
                        <span className="nk-menu-text">Edit Credentials</span>
                      </a>
                    </li>

                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">
                        Misc Pages
                      </h6>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="." className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-light-fill"></em>
                        </span>
                        <span className="nk-menu-text">Auth Pages</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link" target="_blank">
                            <span className="nk-menu-text">Login / Signin</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link" target="_blank">
                            <span className="nk-menu-text">
                              Register / Signup
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link" target="_blank">
                            <span className="nk-menu-text">
                              Forgot Password
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link" target="_blank">
                            <span className="nk-menu-text">
                              Success / Confirm
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-text">
                              classNameic Version - v2
                            </span>
                          </a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                              <a
                                href="."
                                className="nk-menu-link"
                                target="_blank"
                              >
                                <span className="nk-menu-text">
                                  Login / Signin
                                </span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="."
                                className="nk-menu-link"
                                target="_blank"
                              >
                                <span className="nk-menu-text">
                                  Register / Signup
                                </span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="."
                                className="nk-menu-link"
                                target="_blank"
                              >
                                <span className="nk-menu-text">
                                  Forgot Password
                                </span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="."
                                className="nk-menu-link"
                                target="_blank"
                              >
                                <span className="nk-menu-text">
                                  Success / Confirm
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-text">
                              No Slider Version - v3
                            </span>
                          </a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                              <a
                                href="."
                                className="nk-menu-link"
                                target="_blank"
                              >
                                <span className="nk-menu-text">
                                  Login / Signin
                                </span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="."
                                className="nk-menu-link"
                                target="_blank"
                              >
                                <span className="nk-menu-text">
                                  Register / Signup
                                </span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="."
                                className="nk-menu-link"
                                target="_blank"
                              >
                                <span className="nk-menu-text">
                                  Forgot Password
                                </span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="."
                                className="nk-menu-link"
                                target="_blank"
                              >
                                <span className="nk-menu-text">
                                  Success / Confirm
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="." className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-files-fill"></em>
                        </span>
                        <span className="nk-menu-text">Error Pages</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a href="." target="_blank" className="nk-menu-link">
                            <span className="nk-menu-text">
                              404 classNameic
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." target="_blank" className="nk-menu-link">
                            <span className="nk-menu-text">
                              504 classNameic
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." target="_blank" className="nk-menu-link">
                            <span className="nk-menu-text">404 Modern</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." target="_blank" className="nk-menu-link">
                            <span className="nk-menu-text">504 Modern</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="." className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-files-fill"></em>
                        </span>
                        <span className="nk-menu-text">Other Pages</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link">
                            <span className="nk-menu-text">
                              Blank / Startup
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link">
                            <span className="nk-menu-text">Faqs / Help</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link">
                            <span className="nk-menu-text">Terms / Policy</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link">
                            <span className="nk-menu-text">
                              Regular Page - v1
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="." className="nk-menu-link">
                            <span className="nk-menu-text">
                              Regular Page - v2
                            </span>
                          </a>
                        </li>
                      </ul>

                      <li className="nk-menu-item">
                        <a className="nk-menu-link">
                          <span className="nk-menu-text">
                            <Button
                              className="Logout"
                              variant="danger"
                              onClick={handleSubmit}
                            >
                              Log Out
                            </Button>
                          </span>
                        </a>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="nk-wrap ">
            <div className="nk-header nk-header-fixed is-light">
              <div className="container-fluid">
                <div className="nk-header-wrap">
                  <div className="nk-menu-trigger d-xl-none ms-n1">
                    <a
                      href="."
                      className="nk-nav-toggle nk-quick-nav-icon"
                      data-target="sidebarMenu"
                    >
                      <em className="icon ni ni-menu"></em>
                    </a>
                  </div>
                  <div className="nk-header-brand d-xl-none">
                    <a href="html/index.html" className="logo-link">
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
                    </a>
                  </div>
                  <div className="nk-header-search ms-3 ms-xl-0">
                    <em className="icon ni ni-search"></em>
                    <input
                      type="text"
                      className="form-control border-transparent form-focus-none"
                      placeholder="Search anything"
                    />
                  </div>
                  <div className="nk-header-tools">
                    <ul className="nk-quick-nav">
                      <li className="dropdown language-dropdown d-none d-sm-block me-n1">
                        <a
                          href="."
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-bs-toggle="dropdown"
                        >
                          <div className="quick-icon border border-light">
                            <img
                              className="icon"
                              src="./images/flags/english-sq.png"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                          <ul className="language-list">
                            <li>
                              <a href="." className="language-item">
                                <img
                                  src="./images/flags/english.png"
                                  alt=""
                                  className="language-flag"
                                />
                                <span className="language-name">English</span>
                              </a>
                            </li>
                            <li>
                              <a href="." className="language-item">
                                <img
                                  src="./images/flags/spanish.png"
                                  alt=""
                                  className="language-flag"
                                />
                                <span className="language-name">Español</span>
                              </a>
                            </li>
                            <li>
                              <a href="." className="language-item">
                                <img
                                  src="./images/flags/french.png"
                                  alt=""
                                  className="language-flag"
                                />
                                <span className="language-name">Français</span>
                              </a>
                            </li>
                            <li>
                              <a href="." className="language-item">
                                <img
                                  src="./images/flags/turkey.png"
                                  alt=""
                                  className="language-flag"
                                />
                                <span className="language-name">Türkçe</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown chats-dropdown hide-mb-xs">
                        <a
                          href="."
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-bs-toggle="dropdown"
                        >
                          <div className="icon-status icon-status-na">
                            <em className="icon ni ni-comments"></em>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head">
                            <span className="sub-title nk-dropdown-title">
                              Recent Chats
                            </span>
                            <a href=".">Setting</a>
                          </div>
                          <div className="dropdown-body">
                            <ul className="chat-list">
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/apps-chats.html"
                                >
                                  <div className="chat-media user-avatar">
                                    <span>IH</span>
                                    <span className="status dot dot-lg dot-gray"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Iliash Hossain</div>
                                      <span className="time">Now</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: Please confrim if you got my last
                                        messages.
                                      </div>
                                      <div className="status delivered">
                                        <em className="icon ni ni-check-circle-fill"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item is-unread">
                                <a
                                  className="chat-link"
                                  href="html/apps-chats.html"
                                >
                                  <div className="chat-media user-avatar bg-pink">
                                    <span>AB</span>
                                    <span className="status dot dot-lg dot-success"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">
                                        Abu Bin Ishtiyak
                                      </div>
                                      <span className="time">4:49 AM</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Hi, I am Ishtiyak, can you help me with
                                        this problem ?
                                      </div>
                                      <div className="status unread">
                                        <em className="icon ni ni-bullet-fill"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/apps-chats.html"
                                >
                                  <div className="chat-media user-avatar">
                                    <img
                                      src="./images/avatar/b-sm.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">George Philips</div>
                                      <span className="time">6 Apr</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Have you seens the claim from Rose?
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/apps-chats.html"
                                >
                                  <div className="chat-media user-avatar user-avatar-multiple">
                                    <div className="user-avatar">
                                      <img
                                        src="./images/avatar/c-sm.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="user-avatar">
                                      <span>AB</span>
                                    </div>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Softnio Group</div>
                                      <span className="time">27 Mar</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: I just bought a new computer but i
                                        am having some problem
                                      </div>
                                      <div className="status sent">
                                        <em className="icon ni ni-check-circle"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/apps-chats.html"
                                >
                                  <div className="chat-media user-avatar">
                                    <img
                                      src="./images/avatar/a-sm.jpg"
                                      alt=""
                                    />
                                    <span className="status dot dot-lg dot-success"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Larry Hughes</div>
                                      <span className="time">3 Apr</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Hi Frank! How is you doing?
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/apps-chats.html"
                                >
                                  <div className="chat-media user-avatar bg-purple">
                                    <span>TW</span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Tammy Wilson</div>
                                      <span className="time">27 Mar</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: I just bought a new computer but i
                                        am having some problem
                                      </div>
                                      <div className="status sent">
                                        <em className="icon ni ni-check-circle"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-foot center">
                            <a href="html/apps-chats.html">View All</a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown notification-dropdown">
                        <a
                          href="."
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-bs-toggle="dropdown"
                        >
                          <div className="icon-status icon-status-info">
                            <em className="icon ni ni-bell"></em>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head">
                            <span className="sub-title nk-dropdown-title">
                              Notifications
                            </span>
                            <a href=".">Mark All as Read</a>
                          </div>
                          <div className="dropdown-body">
                            <div className="nk-notification">
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-foot center">
                            <a href=".">View All</a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown user-dropdown">
                        <a
                          href="."
                          className="dropdown-toggle me-n1"
                          data-bs-toggle="dropdown"
                        >
                          <div className="user-toggle">
                            <div className="user-avatar sm">
                              <em className="icon ni ni-user-alt"></em>
                            </div>
                            <div className="user-info d-none d-xl-block">
                              <div className="user-status user-status-unverified">
                                Verified
                              </div>
                              <div className="user-name dropdown-indicator">
                                {name.firstName} {name.lastName}
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
                          <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                            <div className="user-card">
                              <div className="user-avatar">
                                <span>AB</span>
                              </div>
                              <div className="user-info">
                                <span className="lead-text">
                                  Abu Bin Ishtiyak
                                </span>
                                <span className="sub-text">
                                  info@softnio.com
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li>
                                <a href="html/user-profile-regular.html">
                                  <em className="icon ni ni-user-alt"></em>
                                  <span>View Profile</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/user-profile-setting.html">
                                  <em className="icon ni ni-setting-alt"></em>
                                  <span>Account Setting</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/user-profile-activity.html">
                                  <em className="icon ni ni-activity-alt"></em>
                                  <span>Login Activity</span>
                                </a>
                              </li>
                              <li>
                                <a className="dark-switch" href=".">
                                  <em className="icon ni ni-moon"></em>
                                  <span>Dark Mode</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li>
                                <a href=".">
                                  <em className="icon ni ni-signout"></em>
                                  <span>Sign out</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="nk-content ">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="nk-content-body">
                    <div className="content-page wide-lg">
                      <div className="nk-block-head nk-block-head-lg">
                        <div className="nk-block-head-content">
                          <h2 className="nk-block-title fw-normal">
                            Regular Page Title
                          </h2>
                          <div className="nk-block-des">
                            <p className="lead">
                              We love to share ideas! Visit our blog if you're
                              looking for great articles or inspiration to get
                              you going.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nk-block">
                        <article className="entry">
                          <h3>Fuga eius ipsama dolores asperiores</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga eius ipsam blanditiis voluptatem mollitia
                            dolores asperiores ipsum rerum repellendus. Ullam
                            et, quam eos blanditiis ipsum tempore minus quis
                            laborum praesentium.
                          </p>
                          <p>
                            Popsam blanditiis voluptatem mollitia dolores
                            asperiores ipsum rerum repellendus. Ullam et, quam
                            eos blanditiis ipsum tempore.
                          </p>
                          <img src="./images/slides/slide-b.jpg" alt="" />
                          <h4>
                            Mollitia dolores asperiores ipsum rerum repellendus
                          </h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illoveritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.{" "}
                          </p>
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora
                            incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minima veniam.
                          </p>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illoveritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.{" "}
                          </p>
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora
                            incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minima veniam.
                          </p>
                          <h5>
                            Perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </h5>
                          <p>
                            Mollitia dolores asperiores ipsum rerum repellendus
                            Sed ut accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illoveritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.{" "}
                          </p>
                        </article>
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
    </div>
  );
}

export default Dashboard;
