import React from "react";
import { useState, useEffect } from "react";
// import ReactCalendar from "react-calendar";
import DatePicker from "react-datepicker";

import { FilePicker } from "react-file-picker";
function Tickets() {
  const [startDate, setStartDate] = useState(new Date());
  const [phonecode, setphonecode] = useState("+91");
  const [countrycodes, setcountrycodes] = useState([]);

  useEffect(() => {
    var data = [
      {
        country: "India",
        code: "+91",
      },
      {
        country: "USA",
        code: "+1",
      },
    ];
    setcountrycodes(data);
  }, []);

  function setcountry(e) {
    var c = e.target.value;
    countrycodes.map((i) => {
      if (i.country == c) {
        setphonecode(i.code);
      }
    });
  }

  const [sidenav, setsidenav] = useState(false);
  const [filelist, setfilelist] = useState([]);
  function updateList() {
    var input = document.getElementById("myfile");
    const a = [];
    for (var i = 0; i < input.files.length; ++i) {
      a.push(input.files.item(i).name);
    }
    setfilelist(a);
  }
  function removeItem(i) {
    var list = filelist;
    setfilelist(list.filter((item) => item !== i));
  }

  return (
    <>
      <section class="outer-wrapper">
        <div class="top-nav-bar">
          <div class="logo">
            <a href="">
              <img src="images/infidigit-logo.png" />
            </a>{" "}
            <span>Growth</span>
          </div>
          <div class="nav-bar-center">&nbsp;</div>
          <div class="nav-bar-right">
            <ul class="list-unstyled nav-right-menu">
              <li>
                <i class="fa fa-bell"></i>
              </li>

              <li class="dropdown">
                <button
                  onClick={() => {
                    console.log("hiii");
                    setsidenav(!sidenav);
                  }}
                  class="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                >
                  <span class="profile-pic">
                    <img src="images/profile-pic.jpeg" alt="" />
                  </span>
                  <span class="profile-name">M.Subash</span>
                </button>

                <ul
                  style={{ display: sidenav ? "block" : "none" }}
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a href="">Profile</a>
                  </li>

                  <li>
                    <a href="/">Log Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="sidebar-nav-bar">
          <ul class="list-unstyled side-menu">
            <li>
              <a href="dashboard.html">
                <i class="fa fa-columns"></i> Dashboard
              </a>
            </li>

            <li>
              <a href="">
                <i class="fa fa-users"></i> Customers
              </a>
            </li>
          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">Ticket 1</div>
              </div>
              <div class="col-sm-7 add-new-btnw"></div>
            </div>

            <div class="common-wrapper">
              <div class="common-wcard">
                <div class="common-form-fields">
                  <div class="add-user">
                    <div class="form-wrappers">
                      <label>Ticket Type</label>
                      <select>
                        <option>Alert</option>
                        <option>Alert</option>
                        <option value="">Alert</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Project</label>
                      <select>
                        <option>Myntra-shoes</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Modue</label>
                      <select>
                        <option>DA/PA Checker</option>
                        <option>Lead</option>
                        <option value="">Prospect</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Subject</label>
                      <input
                        type="text"
                        name=""
                        placeholder="shoes site down"
                      />
                    </div>

                    <div class="form-wrappers">
                      <label>Summary</label>
                      <br />
                      <textarea>Site down from 3:30pm, sent via mail</textarea>
                    </div>

                    <div class="form-wrappers">
                      <label>Document Upload</label>
                      <br />
                      <input
                        type="file"
                        id="myfile"
                        name="myfile"
                        multiple
                        onChange={updateList}
                      />
                      <label id="fileLabel">
                        {filelist.length > 0 ? `${filelist.length} files` : ""}
                      </label>
                    </div>
                    <div class="form-wrappers">
                      <label>Status</label>
                      <select>
                        <option>Open</option>
                        <option>Lead</option>
                        <option value="">Prospect</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Raised On</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>

                    <div class="form-wrappers">
                      <label>Assigned To</label>
                      <select>
                        <option>Raj</option>
                        <option>Lead</option>
                        <option value="">Prospect</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Priority</label>
                      <select>
                        <option>High</option>
                        <option>Lead</option>
                        <option value="">Prospect</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Raised By</label>
                      <select>
                        <option>Bot</option>
                        <option>Lead</option>
                        <option value="">Prospect</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Reported via</label>
                      <select>
                        <option>Bot</option>
                        <option>Lead</option>
                        <option value="">Prospect</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Due On</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>

                    <div class="form-wrappers">
                      <label>Comments</label>
                      <br />
                      <textarea></textarea>
                    </div>

                    <div id="fileList">
                      <ul>
                        {filelist &&
                          filelist.map((i, index) => {
                            return (
                              <li id={i}>
                                {i}{" "}
                                <i
                                  class="fa fa-trash"
                                  onClick={() => {
                                    removeItem(i);
                                  }}
                                ></i>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="form-action-wrapper">
                <li>
                  <a href="#" class="ol-btn">
                    Cancel
                  </a>
                </li>
                <li>
                  <a href="#" class="outline-btn">
                    Save
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tickets;